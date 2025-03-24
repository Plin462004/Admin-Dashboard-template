import React from "react";
import {
  LineChart,
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
  { name: "Jan", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Feb", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Mar", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Apr", uv: 2780, pv: 3908, amt: 2000 },
  { name: "May", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Jun", uv: 2390, pv: 3800, amt: 2500 },
  { name: "Jul", uv: 3490, pv: 4300, amt: 2100 },
];

const CustomLineChart = () => {
  return (
    <div className="w-full h-[400px]">
      <h2 className="text-xl font-bold text-center mb-4">รายได้ต่อเดือน</h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
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
            stroke="#8884d8"
            strokeWidth={3}
            activeDot={{ r: 8 }}
            dot={{ fill: "#8884d8", strokeWidth: 2 }}
          />
          <Line
            type="monotone"
            dataKey="pv"
            stroke="#82ca9d"
            strokeWidth={3}
            activeDot={{ r: 8 }}
            dot={{ fill: "#82ca9d", strokeWidth: 2 }}
          />
          <Brush />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomLineChart;
