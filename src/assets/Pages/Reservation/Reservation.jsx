import React, { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Reservation = () => {
  const [search, setSearch] = useState("");
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState("ທັງໝົດ");
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    fetch("/api/reservations")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then((data) => {
        setReservations(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching reservations:", error);
        setError(error.message);
        setLoading(false);
      });
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("ຢືນຢັນການລຶບ?")) {
      fetch(`/api/reservations/${id}`, { method: "DELETE" })
        .then((res) => res.json())
        .then(() => {
          setReservations(reservations.filter((res) => res.id !== id));
        })
        .catch((error) => console.error("Error deleting reservation:", error));
    }
  };

  const filteredReservations = reservations.filter((res) => {
    const matchSearch = res.customerName.toLowerCase().includes(search.toLowerCase());
    if (filter === "ປະຫວັດການຈອງ") {
      return matchSearch && res.status === "ສຳເລັດ";
    }
    return matchSearch;
  });

  return (
    <div className="w-full min-h-screen rounded-lg p-4 md:p-6 bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">ຈັດການການຈອງ</h2>
      <div className="relative">
        <div className="flex gap-2 mb-4 border-b-2 border-gray-300 text-xl relative">
          {["ທັງໝົດ", "ປະຫວັດການຈອງ"].map((tab) => (
            <button
              key={tab}
              className={`relative px-4 py-2 transition-all duration-300 ${filter === tab ? "text-sky-600 font-bold" : "text-gray-500"}`}
              onClick={() => setFilter(tab)}
            >
              {tab}
              {filter === tab && (
                <div className="absolute bottom-0 left-0 w-full h-1 bg-sky-600"></div>
              )}
            </button>
          ))}
        </div>
      </div>
      <div className="flex items-center w-full mb-4">
        <input
          type="text"
          placeholder="ຄົ້ນຫາຊື່ຜູ້ຈອງ..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border px-4 py-2 rounded-l-xl flex-grow h-10"
        />
        <button className="bg-sky-600 text-white px-4 py-2 rounded-r-xl h-10 hover:bg-sky-700">
          <FiSearch />
        </button>
        <button
          onClick={() => navigate("/formplus")}
          className="bg-green-600 text-white px-4 py-2 rounded-xl ml-2 h-10 hover:bg-green-700"
        >
          + ເພີ່ມ
        </button>
      </div>

      <div className="bg-white shadow-md rounded-lg overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gradient-to-r from-sky-400 to-teal-500">
              <th className="border px-4 py-2">No</th>
              <th className="border px-4 py-2">ຮູບ</th>
              <th className="border px-4 py-2">ເບີຫ້ອງ</th>
              <th className="border px-4 py-2">ລາຄາ</th>
              <th className="border px-4 py-2">ຊື່ຜູ້ຈອງ</th>
              <th className="border px-4 py-2">ເບີໂທ</th>
              <th className="border px-4 py-2">ວັນທີຈອງ</th>
              <th className="border px-4 py-2">ສະຖານະ</th>
              <th className="border px-4 py-2">ຈັດການ</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="9" className="text-center py-4 text-gray-500">ກຳລັງໂຫຼດ...</td>
              </tr>
            ) : filteredReservations.length > 0 ? (
              filteredReservations.map((res, index) => (
                <tr key={res.id} className={`${index % 2 === 0 ? "bg-gray-50" : "bg-white"} text-center`}>
                  <td className="border px-4 py-2">{index + 1}</td>
                  <td className="border px-4 py-2">
                    <img src={res.image} alt="room" className="w-16 h-16 object-cover rounded-lg" />
                  </td>
                  <td className="border px-4 py-2">{res.roomNumber}</td>
                  <td className="border px-4 py-2">{res.price} ກິບ</td>
                  <td className="border px-4 py-2">{res.customerName}</td>
                  <td className="border px-4 py-2">{res.phone}</td>
                  <td className="border px-4 py-2">{res.date}</td>
                  <td className="border px-4 py-2">{res.status}</td>
                  <td className="border px-4 py-2">
                    <button className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700" onClick={() => handleDelete(res.id)}>
                      ລຶບ
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="9" className="text-center py-4 text-gray-500">ບໍ່ມີຂໍ້ມູນການຈອງ</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Reservation;
