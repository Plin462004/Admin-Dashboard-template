import React from "react";
import Content from "../Components/Content";
import MonthlyIncomeChart from "../Chart/MonthlyIncomeChart";
import CustomDonutChart from "../Chart/CustomDonutChart";
import LineChart from "../Chart/LineChart";

const Dashboard = () => {
  return (
    <div className="p-4 bg-gray-200 min-h-screen">
      {/* Summary Cards Row */}
      <div className="grid grid-cols-1 gap-1 ">
        <Content />
      </div>
      <br />

      {/* Main Content Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 h-90">
        {/* Left Column */}
        <div className="bg-white rounded-xl shadow p-4 sm:col-span-2 lg:col-span-4">
          Chart 1
          <CustomDonutChart />
        </div>

        {/* Right Column */}
        <div className="bg-white rounded-xl shadow p-4 sm:col-span-2 lg:col-span-8">
          Chart 2
          <MonthlyIncomeChart />
        </div>
      </div>

      {/* Bottom Row */}
      <div className="mt-4 bg-white rounded-xl shadow p-4">
        Chart Line
        <LineChart />
      </div>
      <div className="mt-4 bg-white rounded-xl shadow p-4">
        Additional Statistics or Full-width Chart
      </div>
    </div>
  );
};

export default Dashboard;
