// นำเข้า React และ Hook ที่จำเป็น
import React, { useState, useEffect } from "react";
// นำเข้าเครื่องมือที่ใช้จัดการเส้นทาง (Route) และ path ของหน้า
import { Link, useNavigate, useLocation } from "react-router-dom";
// นำเข้าภาพโลโก้
import Logo from "../../img/OIP.jpeg";

// นำเข้าไอคอนจาก react-icons เพื่อใช้แสดงในเมนู
import {
  FaDoorOpen,
  FaUserAlt,
  FaUsers,
  FaFileSignature,
  FaCoins,
  FaReadme,
  FaMoneyCheckAlt,
} from "react-icons/fa";
import { BiLogIn, BiLogOut } from "react-icons/bi";
import { IoIosBed } from "react-icons/io";
//import { RxDashboard } from "react-icons/rx";
import { RiDashboardFill } from "react-icons/ri";

// รายการเมนู sidebar ทั้งหมด เก็บเป็น array ของ object
const menuItems = [
  { icon: <RiDashboardFill size={24} />, label: "Dashboard", path: "/" },
  { icon: <IoIosBed size={24} />, label: "ຈັດການຫ້ອງ", path: "/Room" },
  { icon: <FaDoorOpen size={24} />, label: "ຈັດການຈອງ", path: "/Reservation" },
  {
    icon: <FaFileSignature size={24} />,
    label: "ຈັດການສັນຍາເຊົ່າ",
    path: "/Contracts",
  },
  { icon: <FaUsers size={24} />, label: "ຈັດການຜູ້ເຊົ່າ", path: "/Tenants" },
  {
    icon: <FaMoneyCheckAlt size={24} />,
    label: "ຈັດການຊຳລະເງິນ",
    path: "/Payments",
  },
  { icon: <FaCoins size={24} />, label: "ການຕິດໜີ້", path: "/Debts" },
  { icon: <BiLogIn size={24} />, label: "Check-in", path: "/Check_in" },
  { icon: <BiLogOut size={24} />, label: "Check-out", path: "/Check_out" },
  { icon: <FaReadme size={24} />, label: "ການລາຍງານ", path: "/Reports" },
  {
    icon: <FaUserAlt size={20} />,
    label: "ຈັດການຜູ້ເຂົ້າໃຊ້",
    path: "/Table",
  },
  {
    icon: <BiLogOut size={24} />,
    label: "Sign out",
    path: "/Login",
  },
];

// สร้าง Sidebar component
const Sidebar = ({ isOpen, isMobileView }) => {
  // สร้าง state เก็บ path ปัจจุบัน เพื่อใช้ highlight เมนูที่เลือก
  const [activePath, setActivePath] = useState("/");
  // ดึงข้อมูลตำแหน่ง path ปัจจุบันจาก react-router
  const location = useLocation();

  // เมื่อ path เปลี่ยน จะอัปเดต state activePath ใหม่
  useEffect(() => {
    setActivePath(location.pathname);
  }, [location]);

  // เริ่มต้นการ render UI ของ sidebar
  return (
    <div
      className={`bg-gradient-to-r from-sky-500 to-teal-700 text-white h-screen p-4 transition-all duration-300 ease-in-out overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-300 ${
        isOpen ? "w-72" : "w-20"
      } flex flex-col`}
    >
      {/* แสดงชื่อแอปหรือโลโก้ ด้านบนสุด */}
      <div className="text-center">
        {isOpen ? (
          <h1 className="text-2xl font-bold">APARTMENT</h1> // ถ้าเปิด sidebar แสดงข้อความ
        ) : (
          <img src={Logo} alt="Logo" className="w-10 mx-auto" /> // ถ้าปิด แสดงโลโก้แทน
        )}
      </div>

      {/* เส้นแบ่ง */}
      <div>
        <hr className="my-5 border-white" />
        
        {/* เมนูทั้งหมด */}
        <ul className="space-y-1 flex-grow">
          {menuItems.map((item, index) => (
            <li key={index}>
              {/* ใช้ Link จาก react-router-dom เพื่อเปลี่ยนหน้า */}
              <Link
                to={item.path} // ลิงก์ไปยัง path ที่กำหนด
                onClick={() => setActivePath(item.path)} // ตั้ง active path เมื่อคลิก
                className={`flex items-center space-x-3 cursor-pointer text-xl rounded-3xl p-3 transition-all duration-200 ${
                  activePath === item.path
                    ? "bg-white text-black" // เมนูที่เลือกจะมีพื้นหลังขาว ตัวอักษรดำ
                    : "hover:bg-white hover:text-blue-700" // เมนูอื่นมี effect hover
                }`}
              >
                {/* แสดงไอคอนของเมนู */}
                {item.icon}
                
                {/* แสดง label เฉพาะตอน sidebar เปิด */}
                <span className={isOpen ? "block" : "hidden"}>
                  {item.label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// ส่งออก Sidebar component ไปใช้ในที่อื่น
export default Sidebar;
