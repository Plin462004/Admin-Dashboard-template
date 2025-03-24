import React from "react";
import Content from "../Components/Content";
import Chart from "../Chart/Chart";

const Dasboard = () => {
  return (
    <div>
      <div>
        <Content />
      </div>
      <div className="flex space-x-4 mt-6">
        <div className="flex-[4]">
          <Chart />
        </div>
        <div className="flex-[8]">
          <Chart />
        </div>
      </div>
    </div>
  );
};

export default Dasboard;
