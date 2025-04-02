import React from "react";
import { FiBell } from "react-icons/fi";

const NotificationMenu = ({ isOpen, toggleMenu, menuRef }) => {
  return (
    <div className="relative">
      <button
        onClick={toggleMenu}
        className="relative p-2 text-gray-600 hover:text-black transition"
        aria-label="Notifications"
      >
        <FiBell size={22} />
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center shadow-md">
          9+
        </span>
      </button>

      {/* Notification Menu */}
      {isOpen && (
        <div
          ref={menuRef}
          className="absolute right-0 mt-4 bg-gray-200 shadow-lg rounded-lg w-72 py-2 z-50"
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
  );
};

export default NotificationMenu;