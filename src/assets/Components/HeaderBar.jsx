import React, { useState, useEffect, useRef } from "react";
import { BiLogOut } from "react-icons/bi";
import { IoSettingsSharp } from "react-icons/io5";
import { FiMenu, FiBell, FiSearch } from "react-icons/fi";
import linImage from "/src/assets/img/Lin4.jpg"; // import ຮູບພາບມາ

const HeaderBar = ({ toggleSidebar }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const [searchVisible, setSearchVisible] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [currentDateTime, setCurrentDateTime] = useState(""); // สร้าง state สำหรับเก็บวันที่และเวลา

  const profileMenuRef = useRef(null);
  const notificationMenuRef = useRef(null);

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

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="bg-gray-100 shadow-md px-2 py-3 flex justify-between items-center">
      {/* ປຸ່ມເປີດ/ປິດ Sidebar */}
      <button
        onClick={toggleSidebar}
        className=" text-teal-600 font-semibold hover:bg-gray-300 p-2 hover:rounded-3xl"
        aria-label="Toggle Sidebar"
      >
        <FiMenu size={26} />
      </button>

      {/* Icons ເບື່ອງຂວາ */}
      <div className="flex items-center space-x-4">
        {/*ປຸ່ມຄົ້ນຫາ*/}
        <button
          onClick={toggleSearchBar}
          className="p-2 text-gray-600 hover:text-black transition"
          aria-label="Toggle Search Bar"
        >
          <FiSearch size={22} />
        </button>

        {/* ເເຖບຄົ້ນຫາ (ສະເເດງຕາມການເປີດປິດໃຊ້ງານ) */}
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

        {/* แสดงวันที่และเวลา */}
        <div className="text-white text-sm ml-4">{currentDateTime}</div>

        {/* ປຸ່ມການເເຈ້ງເຕືອນ */}
        <div className="relative">
          <button
            onClick={toggleNotificationMenu}
            className="relative p-2 text-gray-600 hover:text-black transition"
            aria-label="Notifications"
          >
            <FiBell size={22} />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center shadow-md">
              9+
            </span>
          </button>

          {/* ເມນູການເເຈ້ງເຕືອນ */}
          {notificationOpen && (
            <div
              ref={notificationMenuRef}
              className="absolute right-0 mt-4 bg-gray-200 shadow-lg rounded-lg w-72 py-2 "
            >
              <div className="px-4 py-2 text-center text-xl text-black font-semibold border-b">
                ການເເຈ້ງເຕືອນ 🔔
              </div>
              <div className="max-h-40 overflow-y-auto">
                <div className="px-4 py-2 text-gray-700 hover:bg-gray-100 transition">
                  🔔 มีออเดอร์ใหม่!
                </div>
                <div className="px-4 py-2 text-gray-700 hover:bg-gray-100 transition">
                  🔔 อัปเดตรายการอาหาร
                </div>
                <div className="px-4 py-2 text-gray-700 hover:bg-gray-100 transition">
                  🔔 โปรโมชั่นพิเศษสำหรับคุณ
                </div>
              </div>
              <div className="px-4 py-2 text-center text-blue-600 hover:underline cursor-pointer">
                ເບິ່ງທັງໝົດ
              </div>
            </div>
          )}
        </div>

        {/* ໂປຮຟາຍ (ໃຊ້ຮູບເເທນ Icons) */}
        <div className="relative">
          <button
            className="flex items-center space-x-2 focus:outline-none"
            onClick={toggleProfileMenu}
            aria-label="Profile Menu"
          >
            <img
              src={linImage} // ໃຊ້ຕົວເເປ linImage ທີ່ import ຮູບພາບມາ
              alt="Profile"
              className="w-9 h-9 rounded-full border-2 border-gray-300"
            />
          </button>

          {/* ເມນູໂປຮຟາຍ */}
          {profileMenuOpen && (
            <div
              ref={profileMenuRef}
              className="text-xl text-black bg-gray-200 absolute right-3 mt-4 shadow-lg rounded-lg w-60 py-2"
            >
              <button className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100 transition">
                ໂປຣຟາຍ
              </button>
              <button className="flex w-full text-left px-4 py-2 text-black hover:bg-gray-100 transition">
                <IoSettingsSharp size={22} />
                &nbsp; ຕັ້ງຄ່າ
              </button>
              <button className="flex w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100 transition">
                <BiLogOut size={22} />
                &nbsp; ອອກຈາກລະບົບ
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeaderBar;
