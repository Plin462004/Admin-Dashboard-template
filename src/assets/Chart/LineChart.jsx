import React from "react";
import {
  LineChart as RechartsLineChart, // เปลี่ยนชื่อ import
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Brush,
} from "recharts";

const data = [
  { name: "ມັງກອນ", uv: 4000, pv: 2400, amt: 2400 },
  { name: "ກຸມພາ", uv: 3000, pv: 1398, amt: 2210 },
  { name: "ມີນາ", uv: 2000, pv: 9800, amt: 2290 },
  { name: "ເມສາ", uv: 2780, pv: 3908, amt: 2000 },
  { name: "ພຶດສະພາ", uv: 1890, pv: 4800, amt: 2181 },
  { name: "ມີຖຸນາ", uv: 1390, pv: 3800, amt: 2500 },
  { name: "ກໍລະກົດ", uv: 3490, pv: 8300, amt: 2100 },
  { name: "ສິງຫາ", uv: 3490, pv: 4300, amt: 2100 },
  { name: "ກັນຍາ", uv: 6490, pv: 4300, amt: 2100 },
  { name: "ຕຸລາ", uv: 3490, pv: 7300, amt: 2100 },
  { name: "ພະຈິກ", uv: 7490, pv: 4300, amt: 2100 },
  { name: "ທັນວາ", uv: 3490, pv: 4300, amt: 2100 },
];

const LineChart = () => { // เปลี่ยนชื่อฟังก์ชัน
  return (
    <div className="w-full h-[400px]">
      <h2 className="text-xl font-bold text-center mb-4">ລາຍໄດ້ຕໍ່ເດືອນ</h2>
      <ResponsiveContainer width="100%" height="100%">
        <RechartsLineChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="uv"
            stroke="#FA2222FF"
            strokeWidth={3}
            activeDot={{ r: 8 }}
            dot={{ fill: "#1000F3FF", strokeWidth: 2 }}
          />
          <Line
            type="monotone"
            dataKey="pv"
            stroke="#01FF62FF"
            strokeWidth={3}
            activeDot={{ r: 8 }}
            dot={{ fill: "#F02A07FF", strokeWidth: 2 }}
          />
          <Brush />
        </RechartsLineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChart;
