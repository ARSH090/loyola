import React, { useState } from "react";
import { motion } from "framer-motion";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useNavigate, Link } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 120 }}
        className="bg-white/10 backdrop-blur-xl p-10 rounded-2xl shadow-2xl w-full max-w-md text-center text-white"
      >
        <h1 className="text-4xl font-extrabold mb-6">Create Account</h1>
        {error && <p className="bg-red-600/40 p-2 rounded mb-4">{error}</p>}
        <form onSubmit={handleSignup} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded-lg bg-white/20 placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded-lg bg-white/20 placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-400"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full p-3 mt-2 rounded-lg bg-gradient-to-r from-yellow-400 to-pink-600 font-bold hover:opacity-90 transition-all"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-sm">
          Already have an account?{" "}
          <Link to="/" className="text-yellow-300 font-semibold">
            Login
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Signup;
