// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
  };
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">Auth APP</h1>
        <ul className="flex space-x-4">
          <li>
            <Link to="/register" className="text-white hover:text-gray-300">
              Register
            </Link>
          </li>
          <li>
            <Link to="/login" className="text-white hover:text-gray-300">
              Login
            </Link>
          </li>
          <li>
            <Link to="/dashboard" className="text-white hover:text-gray-300">
              Dashboard
            </Link>
          </li>
          <li
            onClick={handleLogout}
            className="text-white hover:text-gray-300 cursor-pointer"
          >
            <Link to="/" onClick={handleLogout}>
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
