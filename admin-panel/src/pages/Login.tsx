import React, { useState } from "react";
import { motion } from "framer-motion";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-500 to-pink-500">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/10 backdrop-blur-xl p-10 rounded-2xl shadow-2xl w-full max-w-md text-center text-white"
      >
        <h1 className="text-4xl font-extrabold mb-6">Admin Login</h1>
        {error && <p className="bg-red-600/40 p-2 rounded mb-4">{error}</p>}
        <form onSubmit={handleLogin} className="space-y-4">
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
            className="w-full p-3 mt-2 rounded-lg bg-gradient-to-r from-pink-500 to-indigo-500 font-bold hover:opacity-90 transition-all"
          >
            Sign In
          </button>
        </form>
        <p className="mt-4 text-sm">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-yellow-300 font-semibold">
            Sign Up
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;
