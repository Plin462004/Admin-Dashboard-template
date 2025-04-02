import React, { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Contracts = () => {
  const [search, setSearch] = useState(""); // ສ້າງ state ສຳລັບ search
  const [reservations, setReservations] = useState([]); // เก็บข้อมูลการจอง
  const navigate = useNavigate();

  // ดึงข้อมูลจาก API
  useEffect(() => {
    fetch("/api/reservations")
      .then((res) => res.json())
      .then((data) => setReservations(data))
      .catch((error) => console.error("Error fetching reservations:", error));
  }, []);

  // คัดกรองข้อมูลการจองตามคำค้นหา
  const filteredReservations = reservations.filter((res) =>
    res.customerName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-full min-h-screen rounded-lg p-4 md:p-6 bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">ຈັດການສັນຍາ</h2>
      <div className="flex items-center w-full mb-4">
        <input
          type="text"
          placeholder="ຄົ້ນຫາ..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-400 px-4 py-2 rounded-l-xl flex-grow h-12"
        />
        <button
          onClick={() => setSearch(search)} // เพิ่มฟังก์ชันให้ปุ่มค้นหา
          className="bg-sky-600 text-white px-4 py-2 rounded-r-xl h-12"
        >
          <FiSearch />
        </button>
        <button
          onClick={() => navigate("/Formcontracts")}
          className="bg-green-600 text-white px-4 py-2 rounded-xl ml-2 h-12"
        >
          + ເພີ່ມ
        </button>
      </div>

      {/* ตารางแสดงข้อมูล */}
      <div className="bg-white shadow-md rounded-lg overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gradient-to-r from-sky-400 to-teal-500">
              <th className="border px-4 py-2">No</th>
              <th className="border px-4 py-2">ຮູບ</th>
              <th className="border px-4 py-2">ເບີຫ້ອງ</th>
              <th className="border px-4 py-2">ຊັ້ນ</th>
              <th className="border px-4 py-2">ວັນທີສ້າງສັນຍາ</th>
              <th className="border px-4 py-2">ເເກ້ໄຂ</th>
              <th className="border px-4 py-2">ລຶບ</th> {/* เพิ่มปุ่มลบในส่วนนี้ */}
            </tr>
          </thead>
          <tbody>
            {filteredReservations.length > 0 ? (
              filteredReservations.map((res, index) => (
                <tr key={res.id} className="text-center">
                  <td className="border px-4 py-2">{index + 1}</td>
                  <td className="border px-4 py-2">
                    <img
                      src={res.image}
                      alt="room"
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                  </td>
                  <td className="border px-4 py-2">{res.roomNumber}</td>
                  <td className="border px-4 py-2">{res.floor}</td>
                  <td className="border px-4 py-2">{res.date}</td>
                  <td className="border px-4 py-2">
                    <button className="bg-yellow-600 text-white px-2 py-1 rounded">
                      ລຶບ
                    </button>
                  </td>
                  <td className="border px-4 py-2">
                    <button className="bg-red-600 text-white px-2 py-1 rounded">
                      ລຶບ
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="9" className="text-center py-4 text-gray-500">
                  ບໍ່ມີຂໍ້ມູນການຈອງ
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Contracts;
