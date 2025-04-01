import React, { useState } from 'react';

const Debtsreport = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('เช็คอิน');
  
  // Sample room data
  const roomData = [
    {
      id: "A03",
      date: "ປະຈຳເດືອນ ທັນວາ (12) 2024",
      customerType: "ການຕິດໜີ້",
      customerGroup: "ລວມລາຄາ",
      price: "2,000,000 ກີບ",
      status: "ວ່າງ" // หรือ "ไม่ວ່າງ"
    },
    {
      id: "A03",
      date: "ປະຈຳເດືອນ ມັງກອນ (1) 2025",
      customerType: "ການຕິດໜີ້",
      customerGroup: "ລວມລາຄາ",
      price: "2,000,000 ກີບ",
      status: "ວ່າງ"
    },
    {
      id: "A03",
      date: "ປະຈຳເດືອນ ກຸມພາ (2) 2025",
      customerType: "ການຕິດໜີ້",
      customerGroup: "ລວມລາຄາ",
      price: "2,000,000 ກີບ",
      status: "ວ່າງ"
    }
  ];

  return (
    <div className="bg-gray-100 rounded-lg min-h-screen p-4">
      {/* Header Tabs */}
      <div className="flex border-b border-gray-300 mb-4">
        <button 
          className={`px-6 py-2 ${activeTab === 'เช็คอิน' ? 'text-cyan-500 border-b-2 border-cyan-500' : 'text-gray-500'}`}
          onClick={() => setActiveTab('เช็คอิน')}
        >
          ທັງໝົດ
        </button>
        <button 
          className={`px-6 py-2 ${activeTab === 'ประวัติการเข้าพัก' ? 'text-cyan-500 border-b-2 border-cyan-500' : 'text-gray-500'}`}
          onClick={() => setActiveTab('ประวัติการเข้าพัก')}
        >
          ປະຫວັດການຕິດໜີ້
        </button>
      </div>

      {/* Search Bar */}
      <div className="flex mb-4">
        <input
          type="text"
          placeholder="ຄົ້ນຫາຫ້ອງ, ລາຄ່າ..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="flex-1 px-4 py-2 border border-gray-300 rounded-l-full"
        />
        <button className="bg-cyan-500 text-white px-6 py-2 rounded-r-full">
          ຄົ້ນຫາ
        </button>
      </div>

      {/* Filter Text */}
      <div className="mb-4 text-gray-600">
        ມີທັງໝົດ 3 ຫ້ອງ
      </div>

      {/* Room Cards Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {roomData.map((room, index) => (
          <div key={index} className={`bg-white rounded-md shadow-sm overflow-hidden ${index === 1 ? 'border-2 border-cyan-500' : ''}`}>
            {/* Room Number Header */}
            <div className="bg-gray-200 text-center py-3 font-medium">
              {room.id}
            </div>
            
            {/* Date Info */}
            <div className="p-3 text-center text-sm border-b">
              {room.date}
            </div>
            
            {/* Customer Info */}
            <div className="grid grid-cols-2 text-sm">
              <div className="p-3 border-r border-b">
                <div className="text-gray-500">ການຕິດໜີ້</div>
              </div>
              <div className="p-3 border-b">
                <div className="text-gray-500">ລວມລາຄາ</div>
              </div>
            </div>
            
            {/* Price Info */}
            <div className="grid grid-cols-2 text-sm">
              <div className="p-3 border-r">
                <div className="text-gray-500">ລາຄາ</div>
              </div>
              <div className="p-3">
                <div className="text-gray-500">{room.price}</div>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="p-3 flex justify-between">
              <button className="bg-red-100 text-red-500 px-4 py-2 rounded-full text-sm">
                ຍັງບໍ່ທັນສຳລະ
              </button>
              <button className="bg-green-500 text-white px-6 py-2 rounded-full text-sm">
                ອະນຸມັດ
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Debtsreport;