import React, { useState, useEffect } from "react";
import { FiSearch, FiEdit, FiTrash2 } from "react-icons/fi"; // ไอคอนสำหรับค้นหา, แก้ไข, ลบ
import { useNavigate } from "react-router-dom"; // ใช้สำหรับเปลี่ยนหน้า
import sampleReservations from "./reservationsData"; // mock data สำหรับแสดงข้อมูล

const Table = () => {
  // สร้าง state สำหรับการจัดการข้อมูล
  const [search, setSearch] = useState(""); // ค่าค้นหา
  const [reservations, setReservations] = useState([]); // รายการผู้ใช้งาน
  const [loading, setLoading] = useState(true); // สถานะการโหลดข้อมูล
  const [error, setError] = useState(null); // จัดการ error (ยังไม่ใช้)
  const [filter, setFilter] = useState("ທັງໝົດ"); // ตัวกรอง (All / Admin / User)
  const navigate = useNavigate(); // ใช้เปลี่ยนหน้า

  // โหลดข้อมูลตอนเริ่ม component
  useEffect(() => {
    setReservations(sampleReservations); // ดึง mock data มาใส่
    setLoading(false);
  }, []);

  // ฟังก์ชันลบผู้ใช้
  const handleDelete = (id) => {
    if (window.confirm("ຢືນຢັນການລຶບ?")) {
      fetch(`/api/reservations/${id}`, { method: "DELETE" })
        .then((res) => res.json())
        .then(() => {
          // ลบรายการใน state หลังจากลบสำเร็จ
          setReservations(reservations.filter((res) => res.id !== id));
        })
        .catch((error) => console.error("Error deleting reservation:", error));
    }
  };

  // ฟังก์ชันแก้ไข - ไปยังหน้าฟอร์มแก้ไข
  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  // ตัวกรองข้อมูลตามคำค้นหาและสถานะ
  const filteredReservations = reservations.filter((res) => {
    const matchSearch = res.firstName
      .toLowerCase()
      .includes(search.toLowerCase());

    if (filter === "Admin") {
      return matchSearch && res.status === "Admin";
    } else if (filter === "User") {
      return matchSearch && res.status === "User";
    }

    return matchSearch;
  });

  return (
    <div className="w-full min-h-screen p-4 md:p-6 rounded-lg bg-gray-100">
      {/* หัวข้อ */}
      <h2 className="text-2xl font-bold mb-4">ຕາຕະລາງຜູ້ໃຊ້</h2>

      {/* ปุ่ม filter tab */}
      <div className="relative">
        <div className="flex gap-2 mb-4 border-b-2 border-gray-300 text-xl relative">
          {["ທັງໝົດ", "Admin", "User"].map((tab) => (
            <button
              key={tab}
              className={`relative px-4 py-2 transition-all duration-300 ${
                filter === tab ? "text-sky-600 font-bold" : "text-gray-500"
              }`}
              onClick={() => setFilter(tab)}
            >
              {tab}
              {/* ขีดใต้ tab ที่ active */}
              {filter === tab && (
                <div className="absolute bottom-0 left-0 w-full h-1 bg-sky-600"></div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* กล่องค้นหา + ปุ่มเพิ่ม */}
      <div className="flex items-center w-full mb-4">
        <input
          type="text"
          placeholder="ຄົ້ນຫາ..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-400 px-4 py-2 rounded-l-xl flex-grow h-12"
        />
        <button className="bg-sky-600 text-white px-4 py-2 rounded-r-xl h-12 hover:bg-sky-700">
          <FiSearch />
        </button>
        <button
          onClick={() => navigate("/formplus")}
          className="bg-green-600 text-white px-4 py-2 rounded-xl ml-2 h-12 hover:bg-green-700"
        >
          + ເພີ່ມ
        </button>
      </div>

      {/* ตารางข้อมูล */}
      <div className="bg-white shadow-md text-xl rounded-lg overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2 text-left">ID</th>
              <th className="px-4 py-2 text-left">ຮູບພາບ</th>
              <th className="px-4 py-2 text-left">ຊື່</th>
              <th className="px-4 py-2 text-left">ນາມສະກຸນ</th>
              <th className="px-4 py-2 text-left">ເບີໂທ</th>
              <th className="px-4 py-2 text-left">ສະຖານະ</th>
              <th className="px-4 py-2 text-left">Email</th>
              <th className="px-4 py-2 text-center">ຈັດການ</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="8" className="text-center py-4 text-gray-500">
                  ກຳລັງໂຫຼດ...
                </td>
              </tr>
            ) : filteredReservations.length > 0 ? (
              filteredReservations.map((res, index) => (
                <tr key={res.id} className="border-t border-gray-200">
                  <td className="px-4 py-3">
                    {String(index + 1).padStart(2, "0")}
                  </td>
                  <td className="px-4 py-3">
                    <img
                      src={res.image || "/placeholder-avatar.png"}
                      alt="profile"
                      className="w-10 h-10 object-cover rounded-full"
                    />
                  </td>
                  <td className="px-4 py-3">{res.firstName}</td>
                  <td className="px-4 py-3">{res.lastName}</td>
                  <td className="px-4 py-3">{res.phone}</td>
                  <td className="px-4 py-3">
                    {/* แสดง badge สถานะ Admin หรือ User */}
                    {res.status === "Admin" && (
                      <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-lg font-medium">
                        Admin
                      </span>
                    )}
                    {res.status === "User" && (
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-lg font-medium">
                        User
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-3">{res.email}</td>
                  <td className="px-4 py-3">
                    <div className="flex justify-center gap-2">
                      {/* ปุ่มแก้ไข */}
                      <button
                        onClick={() => handleEdit(res.id)}
                        className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
                        title="ແກ້ໄຂ"
                      >
                        <FiEdit size={16} />
                      </button>

                      {/* ปุ่มลบ */}
                      <button
                        onClick={() => handleDelete(res.id)}
                        className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600"
                        title="ລຶບ"
                      >
                        <FiTrash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" className="text-center py-4 text-gray-500">
                  ບໍ່ມີຂໍ້ມູນຜູ້ໃຊ້
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
