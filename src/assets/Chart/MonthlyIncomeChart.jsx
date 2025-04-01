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
  { month: "ມັງກອນ", income: 12000 },
  { month: "ກຸມພາ", income: 15000 },
  { month: "ມີນາ", income: 18000 },
  { month: "ເມສາ", income: 17000 },
  { month: "ພຶດສະພາ", income: 20000 },
  { month: "ມີຖຸນາ", income: 22000 },
  { month: "ກໍລະກົດ", income: 25000 },
  { month: "ສິງຫາ", income: 24000 },
  { month: "ກັນຍາ", income: 23000 },
  { month: "ຕຸລາ", income: 26000 },
  { month: "ພະຈິກ", income: 28000 },
  { month: "ທັນວາ", income: 30000 },
];

const MonthlyIncomeChart = () => {
  return (
    <div className="w-full h-[300px]">
      <h2 className="text-lg font-bold text-center mb-3">ລາຍໄດ້ເເຕ່ລະເດືອນ</h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 10, right: 20, left: 10, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="income" fill="#4868fc" name="ລາຍໄດ້" barSize={18} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MonthlyIncomeChart;
