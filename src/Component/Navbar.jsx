import React from "react";


const Navbar = () => {
  
  return (
    <nav className="bg-gray-600 p-4 text-white font-semibold flex justify-between items-center shadow-lg shadow-900/40">
      <h1 className="text-xl font-bold"> <span className="text-amber-950 ">Book</span> Finder</h1>
      <ul className="flex gap-4">
        <li className="cursor-pointer hover:underline">Home</li>
        <li className="cursor-pointer hover:underline">About</li>
        <li className="cursor-pointer hover:underline">Categories</li>
      
      </ul>
     
    </nav>
  );
};

export default Navbar;
