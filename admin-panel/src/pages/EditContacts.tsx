import React, { useState, useEffect } from "react";
import { db } from "../firebaseConfig";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const EditContacts = () => {
  const [contact, setContact] = useState({ phone: "", email: "" });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const docRef = doc(db, "siteContent", "contact");
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) setContact(docSnap.data() as any);
    };
    fetchData();
  }, []);

  const handleSave = async () => {
    await setDoc(doc(db, "siteContent", "contact"), contact);
    alert("Contact information updated!");
    navigate("/dashboard");
  };

  return (
    <motion.div
      className="min-h-screen bg-gray-100 p-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h1 className="text-3xl font-bold mb-6">📞 Edit Contact Information</h1>

      <div className="bg-white p-6 rounded-xl shadow-md space-y-4">
        <input
          type="text"
          value={contact.phone}
          onChange={(e) => setContact({ ...contact, phone: e.target.value })}
          placeholder="Phone Number"
          className="w-full p-3 border rounded-lg"
        />
        <input
          type="email"
          value={contact.email}
          onChange={(e) => setContact({ ...contact, email: e.target.value })}
          placeholder="Email Address"
          className="w-full p-3 border rounded-lg"
        />
        <button
          onClick={handleSave}
          className="bg-pink-600 text-white px-6 py-2 rounded-lg hover:bg-pink-700"
        >
          Save Changes
        </button>
      </div>
    </motion.div>
  );
};

export default EditContacts;
