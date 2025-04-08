import React from "react";
// import component ที่ใช้ในหน้า dashboard
import Content from "../Components/Content"; // การ์ดสรุปข้อมูลด้านบน
import MonthlyIncomeChart from "../Chart/MonthlyIncomeChart"; // กราฟรายได้รายเดือน
import CustomDonutChart from "../Chart/CustomDonutChart"; // กราฟวงกลมแสดงข้อมูล
import LineChart from "../Chart/LineChart"; // กราฟเส้นแสดงแนวโน้ม
import Table from "../Pages/Users/Table"; // ตารางผู้ใช้งาน

const Dashboard = () => {
  return (
    <div className="p-1 bg-gray-100 min-h-screen rounded-xl">
      
      {/* แถวแรก: แสดงการ์ดสรุปข้อมูล */}
      <div className="grid grid-cols-1 gap-1">
        <Content />
      </div>&nbsp;

      {/* แถวที่สอง: แสดงกราฟ donut และ กราฟรายได้ */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 h-90">
        
        {/* คอลัมน์ซ้าย: กราฟโดนัท */}
        <div className="bg-white rounded-xl shadow p-4 sm:col-span-2 lg:col-span-4">
          <CustomDonutChart />
        </div>

        {/* คอลัมน์ขวา: กราฟรายได้ต่อเดือน */}
        <div className="bg-white rounded-xl shadow p-4 sm:col-span-2 lg:col-span-8">
          <MonthlyIncomeChart />
        </div>
      </div>

      {/* แถวที่สาม: กราฟเส้นแสดงข้อมูลเพิ่มเติม */}
      <div className="mt-4 bg-white rounded-xl shadow p-4">
        <LineChart />
      </div>

      {/* แถวสุดท้าย: ตารางข้อมูลผู้ใช้งาน */}
      <div className="mt-4 bg-white rounded-xl shadow p-4">
        <Table />
      </div>
    </div>
  );
};

export default Dashboard;
