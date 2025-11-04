import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-gradient-to-r from-indigo-500 to-purple-600 p-6 shadow-lg flex justify-between items-center text-white">
        <h1 className="text-2xl font-bold">Loyola Admin Panel</h1>
        <button
          onClick={handleLogout}
          className="bg-white/20 px-4 py-2 rounded-lg hover:bg-white/30 transition-all"
        >
          Logout
        </button>
      </header>

      <motion.div
        className="flex-1 p-10 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all">
          <h2 className="text-xl font-bold text-gray-700 mb-2">
            📝 Edit Website Texts
          </h2>
          <p className="text-gray-500 mb-4">
            Update hero title, contact info, or about text.
          </p>
          <button
            onClick={() => navigate("/edit-content")}
            className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600"
          >
            Manage Content
          </button>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all">
          <h2 className="text-xl font-bold text-gray-700 mb-2">
            🖼️ Manage Gallery
          </h2>
          <p className="text-gray-500 mb-4">
            Add or remove gallery images displayed on your main site.
          </p>
          <button
            onClick={() => navigate("/manage-gallery")}
            className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600"
          >
            Manage Gallery
          </button>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all">
          <h2 className="text-xl font-bold text-gray-700 mb-2">
            📞 Contact Details
          </h2>
          <p className="text-gray-500 mb-4">
            Edit your website’s phone number or email address.
          </p>
          <button
            onClick={() => navigate("/edit-contacts")}
            className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600"
          >
            Edit Contacts
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Dashboard;
