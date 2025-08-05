// src/components/nav.jsx
import React from "react";

function NavBar() {
  return (
    <nav className="bg-black text-white shadow-md p-4 flex justify-between items-center ">
      <h1 
      className="text-2xl font-bold "
      style={{ fontFamily: '"Permanent Marker", cursive' }}
      >SomyaBaran</h1>
      <ul className="flex gap-15 font-medium ml-10">
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#about">GitHub</a></li>

      </ul>
      
    </nav>
  );
}

export default NavBar;
