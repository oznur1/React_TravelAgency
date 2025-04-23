import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed m-4 top-0 right-0 left-0 shadow-lg z-50 bg-white">
      <div className="container px-4 flex justify-between items-center h-16">
        <h3 className="text-2xl font-bold">Travel</h3>

        {/* Masaüstü menü */}
        <div className="hidden md:flex space-x-4 text-sm font-bold items-center">
          <Link to="/" className="px-6 py-2 hover:bg-gray-600 hover:text-white">Home</Link>
          <Link to="/gallery" className="px-6 py-2 hover:bg-gray-600 hover:text-white">Gallery</Link>
          <Link to="/contact" className="px-6 py-2 hover:bg-gray-600 hover:text-white">Contact</Link>
          <Link to="/about" className="px-6 py-2 hover:bg-gray-600 hover:text-white">About</Link>
        </div>

        {/* Menü butonu - sadece mobil */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobil menü - sadece mobilde görünür */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-4 py-2 space-y-2 text-center">
          <Link to="/" onClick={() => setIsOpen(false)} className="block py-2 hover:bg-gray-200">Home</Link>
          <Link to="/gallery" onClick={() => setIsOpen(false)} className="block py-2 hover:bg-gray-200">Gallery</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="block py-2 hover:bg-gray-200">Contact</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="block py-2 hover:bg-gray-200">About</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
