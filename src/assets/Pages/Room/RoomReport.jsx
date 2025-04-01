import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const RoomCard = ({ room, onEdit, onDelete }) => {
  return (
    <div className="border p-4 rounded-2xl shadow-lg bg-gradient-to-r from-sky-300 to-teal-500 w-full">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-semibold">ເບີຫ້ອງ: {room.id}</h3>
        <span
          className={`px-3 py-1 rounded-full text-white text-sm font-medium ${
            room.status === "ເຕັມ"
              ? "bg-red-500"
              : room.status === "ຖືກຈອງ"
              ? "bg-yellow-500"
              : "bg-green-500"
          }`}
        >
          {room.status}
        </span>
      </div>
      <p className="text-sm text-gray-500">ວັນທີເຂົ້າ: {room.date}</p>
      <p className="text-sm">ຄ່າເຊົ່າ: {room.price} ກີບ</p>
      <p className="text-sm">ຜູ້ເຂົ້າຜັກ: {room.people}</p>
      <p className="text-sm">ຄົງເຫຼື່ອ: {room.remaining}</p>
      <div className="mt-4 flex gap-2">
        <button
          onClick={() => onEdit(room)}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg w-full"
        >
          ເເກ້ໄຂ
        </button>
        <button
          onClick={() => onDelete(room.id)}
          className="px-4 py-2 bg-red-500 text-white rounded-lg w-full"
        >
          ລົບ
        </button>
      </div>
    </div>
  );
};

const Check_in = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("ທັງໝົດ");
  const [modalOpen, setModalOpen] = useState(false);
  const [editingRoom, setEditingRoom] = useState(null);
  const [data, setData] = useState([
    {
      id: "A01",
      status: "ເຕັມ",
      date: "01-10-2024",
      price: "1,000,000",
      people: "2",
      remaining: "500,000",
    },
    {
      id: "A02",
      status: "ວ່າງ",
      date: "01-10-2024",
      price: "1,000,000",
      people: "2",
      remaining: "500,000",
    },
    {
      id: "A03",
      status: "ຖືກຈອງ",
      date: "02-10-2024",
      price: "1,200,000",
      people: "1",
      remaining: "600,000",
    },
    {
      id: "A04",
      status: "ວ່າງ",
      date: "01-10-2024",
      price: "1,000,000",
      people: "2",
      remaining: "500,000",
    },
    {
      id: "A05",
      status: "ເຕັມ",
      date: "01-10-2024",
      price: "1,000,000",
      people: "2",
      remaining: "500,000",
    },
    {
      id: "A06",
      status: "ວ່າງ",
      date: "01-10-2024",
      price: "1,000,000",
      people: "2",
      remaining: "500,000",
    },
    {
      id: "A07",
      status: "ຖືກຈອງ",
      date: "02-10-2024",
      price: "1,200,000",
      people: "1",
      remaining: "600,000",
    },
    {
      id: "A08",
      status: "ວ່າງ",
      date: "01-10-2024",
      price: "1,000,000",
      people: "2",
      remaining: "500,000",
    },
    {
      id: "A09",
      status: "ວ່າງ",
      date: "01-10-2024",
      price: "1,000,000",
      people: "2",
      remaining: "500,000",
    },
    {
      id: "A10",
      status: "ວ່າງ",
      date: "01-10-2024",
      price: "1,000,000",
      people: "2",
      remaining: "500,000",
    },
  ]);

  const filteredData = data.filter(
    (item) =>
      item.id.includes(search) &&
      (filter === "ທັງໝົດ" || item.status === filter)
  );

  const handleDelete = (id) => {
    setData(data.filter((room) => room.id !== id));
  };

  const handleEdit = (room) => {
    setEditingRoom(room);
    setModalOpen(true);
  };

  const handleSave = (updatedRoom) => {
    setData(
      data.map((room) => (room.id === updatedRoom.id ? updatedRoom : room))
    );
    setModalOpen(false);
  };

  return (
    <div className="w-full min-h-screen rounded-lg p-4 md:p-6 bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">ຈັດການຫ້ອງ</h2>
      <div className="relative">
        <div className="flex gap-2 mb-4 border-b-2 border-gray-300 text-xl relative">
          {["ທັງໝົດ", "ເຕັມ", "ວ່າງ", "ຖືກຈອງ"].map((tab) => (
            <button
              key={tab}
              className={`relative px-4 py-2 transition-all duration-300
          ${filter === tab ? "text-sky-600 " : "text-gray-500"}
        `}
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

      <div className="flex items-center w-full">
        <input
          type="text"
          placeholder="ຄົ້ນຫາ..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border px-4 py-2 rounded-l-xl flex-grow h-10 border-gray-200"
        />
        <button className="bg-sky-600 text-white px-4 py-2 rounded-r-xl h-10">
          <FiSearch />
        </button>
        <button
          onClick={() => navigate("/formrooms")}
          className="bg-green-600 text-white px-4 py-2 rounded-xl ml-2 h-10"
        >
          + ເພີ່ມ
        </button>
      </div>
      <br />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredData.map((room) => (
          <RoomCard
            key={room.id}
            room={room}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default Check_in;
