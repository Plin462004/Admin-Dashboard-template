import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Check_out = () => {
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [conditions, setConditions] = useState({
    roomCleaned: true,
    readyToLeave: true,
    noDamage: true,
    electricityPaid: true,
    waterPaid: true,
    rentPaid: true,
  });

  const toggleCondition = (key) => {
    setConditions((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md border border-gray-200">
      <h2 className="text-xl font-bold text-center text-gray-700 mb-4">Check-out</h2>

      {/* ข้อมูลห้องพัก */}
      <div className="bg-gray-100 p-4 rounded-md mb-4">
        <div className="grid grid-cols-2 gap-3 text-sm">
          <p><span className="font-medium">เลขห้อง:</span> A01</p>
          <p><span className="font-medium">ค่าห้อง:</span> 500,000 ກີບ</p>
          <p><span className="font-medium">ผู้เช่า:</span> ນາງ ດາ ແຮງວັນ</p>
          <p><span className="font-medium">เบอร์โทร:</span> 020 55555555</p>
          <p><span className="font-medium">วันที่เริ่มเช่า:</span> 01-10-2024</p>
          <p><span className="font-medium">ค้างจ่าย:</span> 1,000,000 ກີບ</p>
        </div>
      </div>

      {/* วันที่ Check-out */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">วันที่ Check-out</label>
        <DatePicker
          selected={checkOutDate}
          onChange={(date) => setCheckOutDate(date)}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          dateFormat="dd/MM/yyyy"
          placeholderText="เลือกวันที่"
        />
      </div>

      {/* เงื่อนไขการ Check-out */}
      <div className="mb-4">
        <p className="text-sm font-medium text-gray-700">ภาพรวมของห้องพัก</p>
        <div className="grid grid-cols-2 gap-2 mt-2">
          {Object.entries(conditions).map(([key, value]) => (
            <label key={key} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={value}
                onChange={() => toggleCondition(key)}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded"
              />
              <span className="text-sm text-gray-700">
                {key === "roomCleaned" ? "ล้างห้องแล้ว" :
                 key === "readyToLeave" ? "จะไปอยู่ที่อื่น" :
                 key === "noDamage" ? "อุปกรณ์ไม่มีการชำรุด" :
                 key === "electricityPaid" ? "จ่ายค่าไฟฟ้าแล้ว" :
                 key === "waterPaid" ? "จ่ายค่าน้ำแล้ว" :
                 "จ่ายค่าห้องแล้ว"}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* ปุ่ม */}
      <div className="flex justify-between">
        <button className="px-4 py-2 bg-gray-400 text-white rounded-md">ยกเลิก</button>
        <button className="px-4 py-2 bg-cyan-500 text-white rounded-md">ສົ່ງ</button>
      </div>
    </div>
  );
};

export default Check_out;
