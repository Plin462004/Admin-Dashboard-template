import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", income: 12000 },
  { month: "Feb", income: 15000 },
  { month: "Mar", income: 18000 },
  { month: "Apr", income: 17000 },
  { month: "May", income: 20000 },
  { month: "Jun", income: 22000 },
  { month: "Jul", income: 25000 },
  { month: "Aug", income: 24000 },
  { month: "Sep", income: 23000 },
  { month: "Oct", income: 26000 },
  { month: "Nov", income: 28000 },
  { month: "Dec", income: 30000 },
];

const MonthlyIncomeChart = () => {
  return (
    <div className="w-full h-[400px]">
      <h2 className="text-xl font-bold text-center mb-4">ລາຍໄດ້ເເຕ່ລະເດືອນ</h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="income" fill="#4868fc" name="รายได้" barSize={40} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MonthlyIncomeChart;