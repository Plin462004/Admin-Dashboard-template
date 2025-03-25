import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const data = [
  { name: "ຫ້ອງທັງໝົດ", value: 50, color: "#28a745" },
  { name: "ຜູ້ເຊົ່າທັງໝົດ", value: 100, color: "#007bff" },
  { name: "ຫ້ອງວ່າງ", value: 21, color: "#ffc107" },
  { name: "ຫ້ອງເຕັມ", value: 29, color: "#dc3545" },
];

// ฟังก์ชันคำนวณเปอร์เซ็นต์
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * Math.PI / 180);
  const y = cy + radius * Math.sin(-midAngle * Math.PI / 180);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
      className="text-sm"
    >
      {`${(percent * 100).toFixed(1)}%`}
    </text>
  );
};

const CustomDonutChart = () => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-xl font-semibold mb-4">ການເຄື່ອນໄຫວ ຕ່າງໆ</h2>
      <PieChart width={500} height={500}> {/* เพิ่มขนาด Chart */}
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={80} // เพิ่มขนาด innerRadius
          outerRadius={160} // เพิ่มขนาด outerRadius
          fill="#8884d8"
          labelLine={false}
          label={renderCustomizedLabel} // เพิ่ม Label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};

export default CustomDonutChart;
