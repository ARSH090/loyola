import React, { useState, useEffect } from "react";
import { db } from "../firebaseConfig";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const EditContent = () => {
  const [content, setContent] = useState({ heroTitle: "", heroSubtitle: "" });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const docRef = doc(db, "siteContent", "hero");
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) setContent(docSnap.data() as any);
    };
    fetchData();
  }, []);

  const handleSave = async () => {
    await setDoc(doc(db, "siteContent", "hero"), content);
    alert("Hero section updated!");
    navigate("/dashboard");
  };

  return (
    <motion.div
      className="min-h-screen bg-gray-100 p-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h1 className="text-3xl font-bold mb-6">📝 Edit Website Texts</h1>

      <div className="bg-white p-6 rounded-xl shadow-md space-y-4">
        <input
          type="text"
          value={content.heroTitle}
          onChange={(e) => setContent({ ...content, heroTitle: e.target.value })}
          placeholder="Hero Title"
          className="w-full p-3 border rounded-lg"
        />
        <input
          type="text"
          value={content.heroSubtitle}
          onChange={(e) =>
            setContent({ ...content, heroSubtitle: e.target.value })
          }
          placeholder="Hero Subtitle"
          className="w-full p-3 border rounded-lg"
        />
        <button
          onClick={handleSave}
          className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700"
        >
          Save Changes
        </button>
      </div>
    </motion.div>
  );
};

export default EditContent;
