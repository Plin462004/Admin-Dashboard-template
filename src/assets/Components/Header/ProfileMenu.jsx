import React from "react";
import { BiLogOut } from "react-icons/bi";
import { IoSettingsSharp } from "react-icons/io5";
import linImage from "/src/assets/img/Lin4.jpg";

const ProfileMenu = ({ isOpen, toggleMenu, menuRef, onLogout }) => {
  return (
    <div className="relative">
      <button
        className="flex items-center space-x-2 focus:outline-none"
        onClick={toggleMenu}
        aria-label="Profile Menu"
      >
        <img
          src={linImage}
          alt="Profile"
          className="w-9 h-9 rounded-full border-2 border-gray-300"
        />
      </button>

      {/* Profile Menu Dropdown */}
      {isOpen && (
        <div
          ref={menuRef}
          className="text-xl text-black bg-gray-200 absolute right-3 mt-4 shadow-lg rounded-lg w-60 py-2 z-50"
        >
          <button className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100 transition">
            ໂປຣຟາຍ
          </button>
          <button className="flex w-full text-left px-4 py-2 text-black hover:bg-gray-100 transition">
            <IoSettingsSharp size={22} />
            &nbsp; ຕັ້ງຄ່າ
          </button>
          <button
            onClick={onLogout}
            className="flex w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100 transition"
          >
            <BiLogOut size={22} />
            &nbsp; ອອກຈາກລະບົບ
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfileMenu;