import React, { useState } from "react";

const Payments = () => {
  // สร้าง state สำหรับเก็บ tab ที่ถูกเลือก
  const [activeTab, setActiveTab] = useState("requestData");

  // ข้อมูลแท็บ
  const tabs = [
    { id: "userToOut", label: "ຂໍ້ມູນຜູ້ໃຊ້ທີ່ຈະອອກ" },
    { id: "requestData", label: "ຂໍ້ມູນຂໍ (2)" },
    { id: "history", label: "ປະຫວັດການຂໍ" },
    { id: "location", label: "ສະຖານທີ່" },
  ];

  // ฟังก์ชันเปลี่ยนแท็บ
  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-bold mb-4">ຈັດການຊຳລະເງິນ</h2>
      {/* Tabs Menu */}
      <div className="flex space-x-8 border-b pb-2 text-gray-600 text-sm">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabChange(tab.id)}
            className={`pb-1 ${
              activeTab === tab.id
                ? "text-cyan-600 border-b-2 border-cyan-500"
                : "hover:text-blue-500"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Search Bar */}
      <div className="mt-4 flex flex-wrap items-center gap-2">
        <input
          type="text"
          placeholder="ຄົ້ນຫາ..."
          className="p-2 border border-gray-300 rounded-md w-72 focus:outline-none focus:ring-1 focus:ring-blue-300"
        />
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
          ຄົ້ນຫາ
        </button>
      </div>

      {/* Content ของแต่ละแท็บ */}
      <div className="mt-6 bg-white p-4 rounded-lg shadow-md">
        {activeTab === "userToOut" && (
          <div>
            <h3 className="text-base font-semibold text-gray-700 mb-2">
              ຂໍ້ມູນຜູ້ໃຊ້ທີ່ຈະອອກ
            </h3>
            <p className="text-sm text-gray-600">
              (ใส่ข้อมูลหรือ component ต่าง ๆ ของ \"ຂໍ້ມູນຜູ້ໃຊ້ທີ່ຈະອອກ\" ที่นี่)
            </p>
          </div>
        )}

        {activeTab === "requestData" && (
          <div>
            <div className="flex items-center justify-between">
              <h3 className="text-base font-semibold text-gray-700">
                ຂໍ້ມູນຂໍ (2) ລາຍການ
              </h3>
            </div>
            <table className="w-full mt-4 border-collapse border border-gray-200 text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-300 px-4 py-2 text-gray-700">ລ/ດ</th>
                  <th className="border border-gray-300 px-4 py-2 text-gray-700">ເລກທີຂໍ</th>
                  <th className="border border-gray-300 px-4 py-2 text-gray-700">ສູງໂລ</th>
                  <th className="border border-gray-300 px-4 py-2 text-gray-700">ລາຄາ</th>
                  <th className="border border-gray-300 px-4 py-2 text-gray-700">ປະຈຳເດືອນ</th>
                  <th className="border border-gray-300 px-4 py-2 text-gray-700">ຜູ້ຂໍ</th>
                  <th className="border border-gray-300 px-4 py-2 text-gray-700">ເບີໂທ</th>
                  <th className="border border-gray-300 px-4 py-2 text-gray-700">ວັນທີຂໍ</th>
                  <th className="border border-gray-300 px-4 py-2 text-gray-700">ສະຖານະ</th>
                  <th className="border border-gray-300 px-4 py-2 text-gray-700">ຈັດການ</th>
                </tr>
              </thead>
              <tbody>
                {/* Row 1 */}
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2 text-center">1</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">A05</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">2</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    1,000,000 ກີບ
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    ຕຸລາ (10) 2024
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    ມາດາແມ່ແພງຈັນ
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    020 55555555
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    30-10-2024
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    <span className="bg-yellow-100 text-yellow-600 px-2 py-1 rounded-md">
                      ສະຖານະ
                    </span>
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    <button className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition">
                      ອະນຸມັດ
                    </button>
                  </td>
                </tr>

                {/* Row 2 */}
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2 text-center">2</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">A06</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">2</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    1,000,000 ກີບ
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    ຕຸລາ (10) 2024
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    ມາດາແມ່ແພງຈັນ
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    020 55555555
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    30-10-2024
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    <span className="bg-yellow-100 text-yellow-600 px-2 py-1 rounded-md">
                      ສະຖານະ
                    </span>
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    <button className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition">
                      ອະນຸມັດ
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {activeTab === "history" && (
          <div>
            <h3 className="text-base font-semibold text-gray-700 mb-2">
              ປະຫວັດການຂໍ
            </h3>
            <p className="text-sm text-gray-600">
              (ใส่ข้อมูลหรือ component ของ \"ປະຫວັດການຂໍ\" ที่นี่)
            </p>
          </div>
        )}

        {activeTab === "location" && (
          <div>
            <h3 className="text-base font-semibold text-gray-700 mb-2">
              ສະຖານທີ່
            </h3>
            <p className="text-sm text-gray-600">
              (ใส่ข้อมูลหรือ component ของ \"ສະຖານທີ່\" ที่นี่)
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Payments;
