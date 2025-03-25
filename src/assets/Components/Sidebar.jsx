import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { PiBuildingApartmentFill } from "react-icons/pi";
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
import { RxDashboard } from "react-icons/rx";

const menuItems = [
  { icon: <RxDashboard size={24} />, label: "Dashboard", path: "/" },
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
  { icon: <FaReadme size={24} />, label: "ການລາຍງານ", path: "/Reporst" },
  {
    icon: <FaUserAlt size={20} />,
    label: "ຈັດການຜູ້ເຂົ້າໃຊ້",
    path: "/Users",
  },
];

const Sidebar = ({ isOpen }) => {
  const [activePath, setActivePath] = useState("/");
  const location = useLocation();

  useEffect(() => {
    setActivePath(location.pathname);
  }, [location]);

  return (
    <div
      className={`bg-gradient-to-r from-sky-500 to-teal-700 text-white h-screen p-4 transition-all duration-300 ease-in-out overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-300 ${isOpen ? "w-72" : "w-20"} flex flex-col`}
    >
      <div>
        <h1 className="text-2xl font-bold text-center">
          {isOpen ? "APARTMENT" : <PiBuildingApartmentFill size={24} />}
        </h1>
        <hr className="my-5 border-white" />
        <ul className="space-y-2 flex-grow">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                onClick={() => setActivePath(item.path)}
                className={`flex items-center space-x-3 cursor-pointer text-xl rounded-3xl p-2 transition-all duration-200 
    ${
      activePath === item.path
        ? "bg-white text-black"
        : "hover:bg-white hover:text-blue-700"
    }`}
              >
                {item.icon}
                <span className={isOpen ? "block" : "hidden"}>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
