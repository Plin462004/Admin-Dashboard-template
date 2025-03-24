import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import HeaderBar from "./assets/Components/HeaderBar";
import Sidebar from "./assets/Components/Sidebar";
import Room from "./assets/Pages/Room/RoomReport";
import Reservation from "./assets/Pages/Reservation/Reservation";
import Contracts from "./assets/Pages/Contracts/Contracts";
import Tenants from "./assets/Pages/Tenants/Tenants";
import Payments from "./assets/Pages/Payments/Payments";
import Debts from "./assets/Pages/Debts/Debts";
import Check_in from "./assets/Pages/Check_in/Check_in";
import Check_out from "./assets/Pages/Check_out/Check_out";
import Reports from "./assets/Pages/Reporst/Reporst"; // ✅ แก้ชื่อจาก Reporst → Reports
import Users from "./assets/Pages/Users/Users";
import Formrooms from "./assets/Pages/Room/Formrooms";
import Formplus from "./assets/Pages/Reservation/Formplus";
import Formcontracts from "./assets/Pages/Contracts/Formcontracts";
import Dasboard from "./assets/Dashboard/Dasboard";

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(
    localStorage.getItem("sidebarState") === "true" // ดึงค่าจาก localStorage
  );

  const toggleSidebar = () => {
    const newState = !isSidebarOpen;
    setIsSidebarOpen(newState);
    localStorage.setItem("sidebarState", newState); // บันทึกค่าใหม่
  };

  return (
    <BrowserRouter>
      <CssBaseline />
      <div className="flex h-screen">
        {/* Sidebar */}
        <Sidebar
          isOpen={isSidebarOpen}
          className="h-screen fixed z-50 bg-white shadow-md"
        />

        {/* Main Content */}
        <div
          className={`flex flex-col flex-grow transition-all duration-300 ${
            isSidebarOpen ? "w-72" : "w-18"
          } w-full overflow-hidden`}
        >
          {/* Header */}
          <HeaderBar toggleSidebar={toggleSidebar} />

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
              <Route path="/Users" element={<Users />} />
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
