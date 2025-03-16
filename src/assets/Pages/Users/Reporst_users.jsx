import React from "react";
import { Link } from "react-router-dom";  // เพิ่มการนำเข้า Link

// ใช้ input และ button ของ HTML
const users = [
  {
    id: 1,
    name: "มญ มณี แสนสุข",
    phone: "020 55555555",
    email: "many@gmail.com",
    idNumber: "12345678",
    status: "Active",
  },
  {
    id: 2,
    name: "มญ มณี แสนสุข",
    phone: "020 55555555",
    email: "many@gmail.com",
    idNumber: "12345678",
    status: "Active",
  },
];

export default function ReportPage() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex justify-between mb-4">
        <input
          type="text"
          placeholder="ค้นหาสะกุบุ๊ค, ชื่อ, เบอร์, อีเมล..."
          className="w-1/3 px-4 py-2 border rounded-lg"
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
          ค้นหา
        </button>
        <button className="bg-green-500 text-white px-4 py-2 rounded-lg">
          <Link to="/Users">+ เพิ่มผู้ใช้</Link>
        </button>
      </div>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2">ลำดับ</th>
              <th className="px-4 py-2">โปรไฟล์</th>
              <th className="px-4 py-2">ชื่อ และ นามสกุล</th>
              <th className="px-4 py-2">เบอร์</th>
              <th className="px-4 py-2">อีเมล</th>
              <th className="px-4 py-2">ละหัด</th>
              <th className="px-4 py-2">สะกุบุ๊ค</th>
              <th className="px-4 py-2">จัดการ</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id} className="border-t">
                <td className="px-4 py-2 text-center">{index + 1}</td>
                <td className="px-4 py-2 text-center">
                  <div className="w-10 h-10 bg-gray-300 rounded-full mx-auto"></div>
                </td>
                <td className="px-4 py-2">{user.name}</td>
                <td className="px-4 py-2">{user.phone}</td>
                <td className="px-4 py-2">{user.email}</td>
                <td className="px-4 py-2">{user.idNumber}</td>
                <td className="px-4 py-2 text-center">{user.status}</td>
                <td className="px-4 py-2 text-center">
                  <button className="bg-blue-500 text-white px-3 py-1 rounded-md mr-2">
                    แก้ไข
                  </button>
                  <button className="bg-red-500 text-white px-3 py-1 rounded-md">
                    ลบ
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
