// นำเข้า React และ Hook ที่จำเป็น
import React, { useState, useRef, useEffect } from "react";
// นำเข้าไอคอนจาก react-icons
import { FiMenu, FiSearch } from "react-icons/fi";
import { MdMenuOpen } from "react-icons/md";
// ใช้สำหรับเปลี่ยนหน้า route
import { useNavigate } from "react-router-dom";
// import คอมโพเนนต์เมนูโปรไฟล์และแจ้งเตือน
import ProfileMenu from "./ProfileMenu";
import NotificationMenu from "./NotificationMenu";

// Component หลัก HeaderBar รับ props toggleSidebar และ isSidebarOpen
const HeaderBar = ({ toggleSidebar, isSidebarOpen }) => {
  // เก็บค่าการค้นหา
  const [searchQuery, setSearchQuery] = useState("");
  // เก็บสถานะการแสดงช่องค้นหา
  const [searchVisible, setSearchVisible] = useState(false);
  // เก็บสถานะการเปิดเมนูโปรไฟล์
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  // เก็บสถานะการเปิดเมนูแจ้งเตือน
  const [notificationOpen, setNotificationOpen] = useState(false);

  // ref สำหรับตรวจสอบการคลิกนอกเมนูโปรไฟล์
  const profileMenuRef = useRef(null);
  // ref สำหรับตรวจสอบการคลิกนอกเมนูแจ้งเตือน
  const notificationMenuRef = useRef(null);
  // ใช้สำหรับเปลี่ยนหน้า
  const navigate = useNavigate();

  // เมื่อ component โหลดหรืออัปเดต ให้ตรวจสอบการคลิกนอกเมนู
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        profileMenuRef.current &&
        !profileMenuRef.current.contains(event.target)
      ) {
        setProfileMenuOpen(false); // ถ้าคลิกนอกเมนูโปรไฟล์ ให้ปิดเมนู
      }
      if (
        notificationMenuRef.current &&
        !notificationMenuRef.current.contains(event.target)
      ) {
        setNotificationOpen(false); // ถ้าคลิกนอกเมนูแจ้งเตือน ให้ปิดเมนู
      }
    };

    document.addEventListener("mousedown", handleClickOutside); // เพิ่ม event listener
    return () => document.removeEventListener("mousedown", handleClickOutside); // ลบเมื่อ component unmount
  }, []);

  // ฟังก์ชันสลับเปิด/ปิดเมนูโปรไฟล์
  const toggleProfileMenu = () => setProfileMenuOpen(!profileMenuOpen);
  // ฟังก์ชันสลับเปิด/ปิดช่องค้นหา
  const toggleSearchBar = () => setSearchVisible(!searchVisible);
  // ฟังก์ชันสลับเปิด/ปิดเมนูแจ้งเตือน
  const toggleNotificationMenu = () => setNotificationOpen(!notificationOpen);
  // ฟังก์ชันเปลี่ยนค่าค้นหาขณะพิมพ์
  const handleSearchChange = (e) => setSearchQuery(e.target.value);
  // ฟังก์ชันออกจากระบบ
  const handleLogout = () => {
    navigate("/login"); // ไปที่หน้า login
  };

  // เริ่มต้นการแสดงผล UI ของ HeaderBar
  return (
    <div className="bg-gray-100 shadow-md px-2 py-3 flex justify-between items-center">
      {/* ปุ่มเปิด/ปิด Sidebar */}
      <button
        onClick={toggleSidebar}
        className="text-teal-600 font-semibold hover:bg-gray-300 p-2 hover:rounded-3xl transition-all duration-300"
        aria-label="Toggle Sidebar"
      >
        <MdMenuOpen
          size={26} 
           className={`transition-transform duration-300 ${isSidebarOpen ? "rotate-0" : "rotate-180"}`} // หมุน icon ถ้าเปิด sidebar
        />
      </button>

      {/* ส่วนของไอคอนด้านขวา */}
      <div className="flex items-center space-x-4">
        {/* ปุ่มค้นหา */}
        <button
          onClick={toggleSearchBar}
          className="p-2 text-gray-600 hover:text-black transition"
          aria-label="Toggle Search Bar"
        >
          <FiSearch size={22} />
        </button>

        {/* ช่องกรอกคำค้นหา */}
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

        {/* เมนูแจ้งเตือน */}
        <NotificationMenu 
          isOpen={notificationOpen}
          toggleMenu={toggleNotificationMenu}
          menuRef={notificationMenuRef}
        />

        {/* เมนูโปรไฟล์ */}
        <ProfileMenu 
          isOpen={profileMenuOpen}
          toggleMenu={toggleProfileMenu}
          menuRef={profileMenuRef}
          onLogout={handleLogout} // ส่งฟังก์ชัน logout ไปให้เมนูโปรไฟล์
        />
      </div>
    </div>
  );
};

// ส่งออก HeaderBar เพื่อใช้ที่อื่น
export default HeaderBar;
