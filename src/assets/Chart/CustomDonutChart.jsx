import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const data = [
  { name: "Green", value: 45, color: "#28a745" },
  { name: "Blue", value: 8, color: "#007bff" },
  { name: "Yellow", value: 31, color: "#ffc107" },
  { name: "Red", value: 16, color: "#dc3545" },
];

const CustomDonutChart = () => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-xl font-semibold mb-4">What is your favorite color?</h2>
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={80}
          outerRadius={120}
          fill="#8884d8"
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
