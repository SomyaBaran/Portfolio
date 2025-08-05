// src/components/About.jsx
import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-black text-white flex justify-center items-center px-4 py-20"
    >
      <motion.div
        whileHover={{ rotateY: 180 }}
        transition={{ duration: 0.8 }}
        className="relative w-72 h-96 [transform-style:preserve-3d] cursor-pointer"
      >
        {/* Front */}
        <div className="absolute inset-0 bg-gray-900 rounded-xl shadow-lg flex flex-col justify-center items-center [backface-visibility:hidden]">
          <h2 className="text-2xl font-bold mb-2">About Me</h2>
        </div>

        {/* Back */}
        <div className="absolute inset-0 bg-gray-500 rounded-xl shadow-lg flex flex-col justify-center items-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <h2 className="text-2xl text-black font-bold mb-2">Developer</h2>
          <p className="text-center text-gray-200 px-4">
            This is the back side. Looks nice, right?
          </p>
        </div>
      </motion.div>
    </section>
  );
}
