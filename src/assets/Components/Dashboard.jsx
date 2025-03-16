import React from "react";
import { FaBed, FaUsers } from "react-icons/fa";
import { IoIosBed } from "react-icons/io";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const barData = [
  { name: "01/10", value: 30 },
  { name: "02/10", value: 3 },
  { name: "03/10", value: 10 },
  { name: "04/10", value: 5 },
  { name: "05/10", value: 24 },
  { name: "06/10", value: 27 },
  { name: "07/10", value: 5 },
];

const pieData = [
  { name: "Direct", value: 70 },
  { name: "Organic search", value: 18 },
  { name: "Referral", value: 12 },
];

const Content = () => {
  return (
    <div>
      <div
        className="bg-cover bg-center bg-no-repeat text-white rounded-lg"
        style={{ backgroundImage: "url('src/assets/img/D.jpg')" }}
      >
        <div className="p-6">
          <h1 className="text-white font-bold text-2xl">Hello, Soulin</h1>
          <p className="text-white text-xl">
            ຍິນດີຕ້ອນຮັບເຂົ້າສູ່ ລະບົບບໍລິຫານ ຈັດການ APARTMENT
          </p>
        </div>

        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-2xl">
          <Card
            icon={
              <FaUsers className="text-5xl text-blue-600 hover:border-blue-600" />
            }
            title="ຜູ້ເຊົ່າທ້ງໜົດ"
            value="100 (ຄົນ)"
            borderColor="blue-600"
          />
          <Card
            icon={
              <IoIosBed className="text-5xl text-green-600 hover:border-green-600" />
            }
            title="ຫ້ອງທັງໜົດ"
            value="20 (ຫ້ອງ)"
            borderColor="green-600"
          />
          <Card
            icon={
              <IoIosBed className="text-5xl text-pink-600 hover:border-pink-600 " />
            }
            title="ຫ້ອງວ່າງ"
            value="10 (ຫ້ອງ)"
            borderColor="pink-600"
          />
          <Card
            icon={
              <FaBed className="text-5xl text-red-600 hover:border-red-600" />
            }
            title="ຫ້ອງເຕັມ"
            value="10 (ຫ້ອງ)"
            borderColor="red-600"
          />
        </div>
      </div>

      <div className="bg-cover bg-center bg-no-repeat text-white rounded-lg">
        <div className="shadow-md rounded-3xl p-5 grid grid-cols-1 md:grid-cols-2 gap-4">
          <Chart title="ການເຄື່ອນໄຫວຂອງລາຍຮັບ" pieData={pieData} />
          <ChartBar
            title="ລາຍຮັບ"
            barData={barData}
            totalIncome="10,000,000 ກີບ"
          />
        </div>
      </div>
    </div>
  );
};

const Card = ({ icon, title, value, borderColor }) => (
  <div
    className={`bg-gray-100 p-12 shadow-xl rounded-lg flex items-center border hover:border-${borderColor}`}
  >
    {icon}
    <div className="ml-6">
      <h3 className="text-xl text-black">{title}</h3>
      <p className="text-black">{value}</p>
    </div>
  </div>
);

const Chart = ({ title, pieData }) => (
  <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
    <h3 className="text-lg font-semibold text-gray-700 text-center">{title}</h3>
    <ResponsiveContainer width="100%" height={220}>
      <PieChart>
        <Pie
          data={pieData}
          dataKey="value"
          nameKey="name"
          outerRadius={80}
          label
        >
          {pieData.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={["#3b82f6", "#22d3ee", "#e5e7eb"][index]}
            />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  </div>
);

const ChartBar = ({ title, barData, totalIncome }) => (
  <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
    <h3 className="text-lg font-semibold text-gray-700 text-center">{title}</h3>
    <ResponsiveContainer width="100%" height={220}>
      <BarChart
        data={barData}
        margin={{ top: 10, right: 20, left: -10, bottom: 5 }}
      >
        <XAxis dataKey="name" stroke="#999" />
        <YAxis stroke="#999" />
        <Tooltip />
        <Bar dataKey="value" fill="#00BCD4" radius={[5, 5, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
    <p className="text-center text-blue-600 font-semibold mt-4">
      ລາຍຮັບລວມ: <span className="text-blue-500">{totalIncome}</span>
    </p>
  </div>
);

export default Content;
