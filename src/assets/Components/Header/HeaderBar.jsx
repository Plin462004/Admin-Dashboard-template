import React, { useState, useRef, useEffect } from "react";
import { FiMenu, FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import ProfileMenu from "./ProfileMenu";
import NotificationMenu from "./NotificationMenu";

const HeaderBar = ({ toggleSidebar, isSidebarOpen }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchVisible, setSearchVisible] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);
  
  const profileMenuRef = useRef(null);
  const notificationMenuRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        profileMenuRef.current &&
        !profileMenuRef.current.contains(event.target)
      ) {
        setProfileMenuOpen(false);
      }
      if (
        notificationMenuRef.current &&
        !notificationMenuRef.current.contains(event.target)
      ) {
        setNotificationOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleProfileMenu = () => setProfileMenuOpen(!profileMenuOpen);
  const toggleSearchBar = () => setSearchVisible(!searchVisible);
  const toggleNotificationMenu = () => setNotificationOpen(!notificationOpen);
  const handleSearchChange = (e) => setSearchQuery(e.target.value);
  
  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <div className="bg-gray-100 shadow-md px-2 py-3 flex justify-between items-center">
      {/* Sidebar Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="text-teal-600 font-semibold hover:bg-gray-300 p-2 hover:rounded-3xl transition-all duration-300"
        aria-label="Toggle Sidebar"
      >
        <FiMenu 
          size={26} 
          className={`transition-transform duration-300 ${isSidebarOpen ? "rotate-90" : "rotate-0"}`}
        />
      </button>

      {/* Right-Side Icons */}
      <div className="flex items-center space-x-4">
        {/* Search Button */}
        <button
          onClick={toggleSearchBar}
          className="p-2 text-gray-600 hover:text-black transition"
          aria-label="Toggle Search Bar"
        >
          <FiSearch size={22} />
        </button>

        {/* Search Bar */}
        {searchVisible && (
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="ค้นหา..."
            className="p-2 border rounded-3xl"
            aria-label="Search"
          />
        )}

        {/* Notification Component */}
        <NotificationMenu 
          isOpen={notificationOpen}
          toggleMenu={toggleNotificationMenu}
          menuRef={notificationMenuRef}
        />

        {/* Profile Component */}
        <ProfileMenu 
          isOpen={profileMenuOpen}
          toggleMenu={toggleProfileMenu}
          menuRef={profileMenuRef}
          onLogout={handleLogout}
        />
      </div>
    </div>
  );
};

export default HeaderBar;