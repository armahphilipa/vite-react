import { useState, useEffect } from 'react';
import { HiMenu, HiX } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";
import { auth } from "../firebaseConfig"; // Import your auth instance

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const [user, setUser] = useState(null); // Track user authentication state

  // Listen for auth state changes
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Hide navbar on dashboard
  if (location.pathname === "/dashboard") {
    return null;
  }

  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img src="/assets/logo.png" alt="Tumus Logo" className="w-10 h-10" />
          <span className="font-bold text-lg text-gray-800">TUMUS</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-sm font-medium text-gray-700">
          <li>
            <Link to="/" className="hover:text-yellow-600">Home</Link>
          </li>
          <li>
            <a href="#about" className="hover:text-yellow-600">About</a>
          </li>
          <li>
            <a href="#gallery" className="hover:text-yellow-600">Gallery</a>
          </li>
          <li>
            <a href="#events" className="hover:text-yellow-600">Events</a>
          </li>
          <li>
            <a href="#founders" className="hover:text-yellow-600">Founders</a>
          </li>
          <li>
            <a href="#community" className="hover:text-yellow-600">Blog</a>
          </li>
        </ul>

        {/* Desktop Buttons - Conditionally render based on auth state */}
        {!user ? (
          <div className="hidden md:flex space-x-4">
            <Link 
              to="/login" 
              className="text-sm px-4 py-2 rounded border border-yellow-500 text-yellow-600 hover:bg-yellow-100 transition-colors"
            >
              Login
            </Link>
            <Link 
              to="/signup" 
              className="text-sm px-4 py-2 rounded bg-yellow-500 text-white hover:bg-yellow-600 transition-colors"
            >
              Join Us
            </Link>
          </div>
        ) : (
          <Link 
            to="/profile" 
            className="hidden md:flex items-center space-x-2 text-sm font-medium"
          >
            <span className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
              {user.photoURL ? (
                <img src={user.photoURL} alt="Profile" className="w-full h-full object-cover" />
              ) : (
                <span className="text-sm">
                  {user.email ? user.email.charAt(0).toUpperCase() : "U"}
                </span>
              )}
            </span>
            <span>My Account</span>
          </Link>
        )}

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {menuOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white px-4 pb-4 space-y-2 shadow-md">
          <Link to="/" className="block py-2 text-gray-700 hover:text-yellow-600">Home</Link>
          <a href="#about" className="block py-2 text-gray-700 hover:text-yellow-600">About</a>
          <a href="#gallery" className="block py-2 text-gray-700 hover:text-yellow-600">Gallery</a>
          <a href="#events" className="block py-2 text-gray-700 hover:text-yellow-600">Events</a>
          <a href="#founders" className="block py-2 text-gray-700 hover:text-yellow-600">Founders</a>
          <a href="#community" className="block py-2 text-gray-700 hover:text-yellow-600">Community</a>
          
          {!user ? (
            <>
              <Link 
                to="/login" 
                className="block w-full mt-2 py-2 text-center border border-yellow-500 text-yellow-600 rounded hover:bg-yellow-100"
              >
                Login
              </Link>
              <Link 
                to="/signup" 
                className="block w-full py-2 text-center bg-yellow-500 text-white rounded hover:bg-yellow-600"
              >
                Join Us
              </Link>
            </>
          ) : (
            <Link 
              to="/profile" 
              className="block w-full py-2 text-center bg-yellow-500 text-white rounded hover:bg-yellow-600"
            >
              My Profile
            </Link>
          )}
        </div>
      )}
    </nav>
  );
}