import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import profilePlaceholder from "../assets/user.png";
import logo from '../assets/Digi.png';  

const Header = () => {
  const [token, setToken] = useState(localStorage.getItem("authToken"));
  const location = useLocation();

  // Detect specific routes
  const isCommunityRoute = location.pathname.startsWith("/community");
  const isBlogCreationRoute = location.pathname === "/api/blog/create";

  // Update token when it changes in localStorage
  useEffect(() => {
    const handleStorageChange = () => {
      setToken(localStorage.getItem("authToken"));
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const userProfilePicture = profilePlaceholder; // Can be replaced by dynamic user profile image

  return (
    <header className="sticky top-0 bg-[#071952] z-10">
      <div className="container mx-auto px-4 lg:px-8 flex justify-between items-center py-4">
        {/* Logo Section */}
        <Link to="/api/blog" className="text-2xl font-semibold text-black">
          <img className="w-16 h-16 rounded-full object-cover" src={logo} alt="Logo" />
        </Link>

        <nav className="flex items-center space-x-6">
          {token ? (
            <>
              {/* Links for authenticated users */}
              {!isCommunityRoute && (
                <Link
                  to="/community"
                  className="text-[#B9E5E8] hover:text-[#FF8225] transition duration-200"
                >
                  Join Community
                </Link>
              )}

              {!isBlogCreationRoute && (
                <Link
                  to="/api/blog/create"
                  className="text-[#B9E5E8] hover:text-[#FF8225] transition duration-200"
                >
                  Write Post
                </Link>
              )}

              <Link to="/user/profile" className="relative">
                <img
                  src={userProfilePicture}
                  alt="User Profile"
                  className="w-10 h-10 rounded-full border-2 border-black hover:border-white transition duration-200"
                />
              </Link>
            </>
          ) : (
            // Login link for unauthenticated users
            <Link
              to="/user/login"
              className="text-gray-700 hover:text-white transition duration-200"
            >
              Login
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
