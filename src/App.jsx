import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CssBaseline } from "@mui/material";

// นำเข้าคอมโพเนนต์ต่าง ๆ
import HeaderBar from "./assets/Components/Header/HeaderBar";
import Sidebar from "./assets/Components/Sidebar/Sidebar";
import Room from "./assets/Pages/Room/RoomReport";
import Reservation from "./assets/Pages/Reservation/Reservation";
import Contracts from "./assets/Pages/Contracts/Contracts";
import Tenants from "./assets/Pages/Tenants/Tenants";
import Payments from "./assets/Pages/Payments/Payments";
import Debts from "./assets/Pages/Debts/Debts";
import Check_in from "./assets/Pages/Check_in/Check_in";
import Check_out from "./assets/Pages/Check_out/Check_out";
import Reports from "./assets/Pages/Reports/Reports";
import Table from "./assets/Pages/Users/Table";
import Formrooms from "./assets/Pages/Room/Formrooms";
import Formplus from "./assets/Pages/Reservation/Formplus";
import Formcontracts from "./assets/Pages/Contracts/Formcontracts";
import Dasboard from "./assets/Dashboard/Dasboard";

// ไม่ต้องนำเข้า CSS เพิ่มเติม เนื่องจากเรากำหนดในไฟล์ index.css แล้ว

const App = () => {
  // ตรวจจับว่าเป็นหน้าจอขนาดเล็กหรือไม่
  const [isMobileView, setIsMobileView] = useState(false);

  // สถานะของ Sidebar (เปิดหรือปิด)
  const [isSidebarOpen, setIsSidebarOpen] = useState(() => {
    const isMobile = window.innerWidth < 768;
    // ถ้าเป็นหน้าจอมือถือ -> sidebar ปิดเสมอ
    if (isMobile) {
      return false;
    } else {
      // ถ้าเป็น desktop -> ใช้ค่าที่เคยเก็บไว้ใน localStorage
      return (
        localStorage.getItem("sidebarState") === "true" ||
        localStorage.getItem("sidebarState") === null // ถ้ายังไม่เคยตั้งค่าเลย ให้เปิดไว้
      );
    }
  });

  // ตรวจจับเมื่อหน้าจอเปลี่ยนขนาด
  useEffect(() => {
    const checkScreenSize = () => {
      const isMobile = window.innerWidth < 768;
      setIsMobileView(isMobile);
      // ถ้าจาก desktop เปลี่ยนเป็น mobile ให้ปิด sidebar
      if (isMobile && !isMobileView) {
        setIsSidebarOpen(false);
      }
    };

    checkScreenSize(); // เช็คตอนโหลดครั้งแรก
    window.addEventListener("resize", checkScreenSize); // เช็คตอนหน้าจอเปลี่ยนขนาด

    return () => window.removeEventListener("resize", checkScreenSize); // ทำความสะอาด event เมื่อ component ถูก unmount
  }, [isMobileView]);

  // สำหรับแสดง overlay ทับเมื่อ sidebar เปิดใน mobile
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    setShowOverlay(isMobileView && isSidebarOpen); // แสดง overlay เมื่อเป็นมือถือและ sidebar เปิดอยู่
  }, [isMobileView, isSidebarOpen]);

  // สลับเปิด/ปิด sidebar
  const toggleSidebar = () => {
    const newState = !isSidebarOpen;
    setIsSidebarOpen(newState);

    // บันทึกค่าไว้ใน localStorage เฉพาะใน desktop
    if (!isMobileView) {
      localStorage.setItem("sidebarState", newState);
    }
  };

  // ปิด sidebar เมื่อคลิก overlay (เฉพาะ mobile)
  const closeSidebar = () => {
    if (isMobileView) {
      setIsSidebarOpen(false);
    }
  };

  return (
    <BrowserRouter>
      <CssBaseline /> {/* ลบ default style ของเบราว์เซอร์ (MUI) */}
      <div className="flex h-screen hide-scrollbar">
        
        {/* Overlay ดำครึ่งจอ เมื่อ sidebar เปิดใน mobile */}
        {showOverlay && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={closeSidebar}
          />
        )}

        {/* Sidebar ซ้ายมือ */}
        <div
          className={`fixed h-screen z-50 transition-all duration-300 ${
            isMobileView
              ? `transform ${
                  isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                } w-72` // mobile: เลื่อนเข้า/ออกจากจอ
              : `${isSidebarOpen ? "w-72" : "w-20"}` // desktop: ยืด/ย่อความกว้าง
          } overflow-y-auto hide-scrollbar`}
        >
          <Sidebar isOpen={isSidebarOpen} isMobileView={isMobileView} />
        </div>

        {/* Main Content ด้านขวา */}
        <div
          className={`flex flex-col flex-grow transition-all duration-300 ${
            isMobileView
              ? "w-full" // mobile: เต็มจอ
              : `${isSidebarOpen ? "ml-72" : "ml-20"} w-full` // desktop: ขยับตาม sidebar
          }`}
        >
          {/* Header ด้านบน */}
          <HeaderBar
            toggleSidebar={toggleSidebar}
            isSidebarOpen={isSidebarOpen}
          />

          {/* พื้นที่เนื้อหาหลัก */}
          <div className="p-4 flex-grow overflow-y-auto h-full hide-scrollbar">
            <Routes>
              {/* กำหนดเส้นทางของหน้าแต่ละหน้า */}
              <Route path="/" element={<Dasboard />} />
              <Route path="/Room" element={<Room />} />
              <Route path="/Reservation" element={<Reservation />} />
              <Route path="/Contracts" element={<Contracts />} />
              <Route path="/Tenants" element={<Tenants />} />
              <Route path="/Payments" element={<Payments />} />
              <Route path="/Debts" element={<Debts />} />
              <Route path="/Check_in" element={<Check_in />} />
              <Route path="/Check_out" element={<Check_out />} />
              <Route path="/Reports" element={<Reports />} />
              <Route path="/Table" element={<Table />} />
              <Route path="/formrooms" element={<Formrooms />} />
              <Route path="/Formplus" element={<Formplus />} />
              <Route path="/Formcontracts" element={<Formcontracts />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;