import React from 'react';
import Content from '../Components/Content'
import MonthlyIncomeChart  from '../Chart/MonthlyIncomeChart';
import CustomDonutChart  from '../Chart/CustomDonutChart';
import CustomLineChart from '../Chart/CustomLineChart';

const Dashboard = () => {
  return (
    <div className="p-4 bg-gray-50 min-h-screen">
      {/* Summary Cards Row */}
      <div className="grid grid-cols-1 gap-1 ">
       <Content />
      </div><br />
      {/* Main Content Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4">
        {/* Left Column */}
        <div className="bg-white rounded-lg shadow p-4 sm:col-span-2 lg:col-span-4">
          Chart 1
          <CustomDonutChart />
        </div>

        {/* Right Column */}
        <div className="bg-white rounded-lg shadow p-4 sm:col-span-2 lg:col-span-8">
          Chart 2
          <MonthlyIncomeChart />
        </div>
      </div>

      {/* Bottom Row */}
      <div className="mt-4 bg-white rounded-lg shadow p-4">
        Chart Line
        <CustomLineChart />
      </div>
      <div className="mt-4 bg-white rounded-lg shadow p-4">
        Additional Statistics or Full-width Chart
      </div>
    </div>
  );
};

export default Dashboard;
