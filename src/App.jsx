import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CssBaseline } from "@mui/material";
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


const App = () => {
  // เพิ่ม state สำหรับตรวจจับขนาดหน้าจอ
  const [isMobileView, setIsMobileView] = useState(false);
  
  // ปรับการตั้งค่าเริ่มต้นของ sidebar
  const [isSidebarOpen, setIsSidebarOpen] = useState(() => {
    // เช็คขนาดหน้าจอตอนโหลดครั้งแรก
    const isMobile = window.innerWidth < 768;
    
    // ถ้าเป็นหน้าจอมือถือ เริ่มต้นด้วย sidebar ที่ปิด, มิฉะนั้นใช้ค่าจาก localStorage
    if (isMobile) {
      return false;
    } else {
      return localStorage.getItem("sidebarState") === "true" || 
             localStorage.getItem("sidebarState") === null; // default to true if not set
    }
  });

  // ตรวจจับการเปลี่ยนแปลงขนาดหน้าจอ
  useEffect(() => {
    const checkScreenSize = () => {
      const isMobile = window.innerWidth < 768;
      setIsMobileView(isMobile);
      
      // ปรับแค่เมื่อเปลี่ยนจากหน้าจอใหญ่เป็นหน้าจอเล็ก
      if (isMobile && !isMobileView) {
        setIsSidebarOpen(false);
      }
    };
    
    // ตรวจสอบตอนเริ่มต้น
    checkScreenSize();
    
    // ตรวจสอบเมื่อขนาดหน้าจอเปลี่ยน
    window.addEventListener("resize", checkScreenSize);
    
    // Cleanup
    return () => window.removeEventListener("resize", checkScreenSize);
  }, [isMobileView]);

  // เพิ่ม overlay สำหรับ mobile view เมื่อ sidebar เปิด
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    // แสดง overlay เมื่อ sidebar เปิดใน mobile view
    setShowOverlay(isMobileView && isSidebarOpen);
  }, [isMobileView, isSidebarOpen]);

  const toggleSidebar = () => {
    const newState = !isSidebarOpen;
    setIsSidebarOpen(newState);
    
    // บันทึกสถานะลง localStorage เฉพาะเมื่อไม่ใช่หน้าจอมือถือ
    if (!isMobileView) {
      localStorage.setItem("sidebarState", newState);
    }
  };

  // เพิ่มฟังก์ชั่นสำหรับการปิด sidebar เมื่อคลิก overlay
  const closeSidebar = () => {
    if (isMobileView) {
      setIsSidebarOpen(false);
    }
  };

  return (
    <BrowserRouter>
      <CssBaseline />
      <div className="flex h-screen">
        {/* Overlay เมื่อ sidebar เปิดใน mobile mode */}
        {showOverlay && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={closeSidebar}
          />
        )}

        {/* Sidebar */}
        <div 
          className={`fixed h-screen z-50 transition-all duration-300 ${
            isMobileView 
              ? `transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} w-72` 
              : `${isSidebarOpen ? "w-72" : "w-20"}`
          }`}
        >
          <Sidebar isOpen={isSidebarOpen} isMobileView={isMobileView} />
        </div>

        {/* Main Content */}
        <div 
          className={`flex flex-col flex-grow transition-all duration-300 ${
            isMobileView 
              ? "w-full" 
              : `${isSidebarOpen ? "ml-72" : "ml-20"} w-full`
          }`}
        >
          {/* Header */}
          <HeaderBar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />

          {/* Page Content */}
          <div className="p-4 flex-grow overflow-y-auto h-full">
            <Routes>
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