import React, { useState, useEffect } from "react";
import { db, storage } from "../firebaseConfig";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage";
import { motion } from "framer-motion";

const ManageGallery = () => {
  const [images, setImages] = useState<{ id: string; url: string }[]>([]);
  const [file, setFile] = useState<File | null>(null);

  useEffect(() => {
    const fetchImages = async () => {
      const querySnapshot = await getDocs(collection(db, "gallery"));
      const imgs = querySnapshot.docs.map((d) => ({
        id: d.id,
        url: d.data().url,
      }));
      setImages(imgs);
    };
    fetchImages();
  }, []);

  const uploadImage = async () => {
    if (!file) return;
    const storageRef = ref(storage, `gallery/${file.name}`);
    await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(storageRef);
    await addDoc(collection(db, "gallery"), { url: downloadURL });
    alert("Image uploaded!");
    window.location.reload();
  };

  const deleteImage = async (id: string, url: string) => {
    const fileRef = ref(storage, url);
    await deleteObject(fileRef);
    await deleteDoc(doc(db, "gallery", id));
    alert("Image deleted!");
    window.location.reload();
  };

  return (
    <motion.div
      className="min-h-screen bg-gray-100 p-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h1 className="text-3xl font-bold mb-6">🖼️ Manage Gallery</h1>

      <div className="bg-white p-6 rounded-xl shadow-md mb-6">
        <input
          type="file"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
          className="w-full p-3 border rounded-lg"
        />
        <button
          onClick={uploadImage}
          className="mt-4 bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700"
        >
          Upload
        </button>
      </div>

      <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6">
        {images.map((img) => (
          <div
            key={img.id}
            className="bg-white rounded-lg shadow-md overflow-hidden relative"
          >
            <img src={img.url} alt="Gallery" className="w-full h-48 object-cover" />
            <button
              onClick={() => deleteImage(img.id, img.url)}
              className="absolute bottom-2 right-2 bg-red-500 text-white px-3 py-1 rounded"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default ManageGallery;
