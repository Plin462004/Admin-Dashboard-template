import React from "react";
import { FaBed, FaUsers, FaCoins } from "react-icons/fa";
import { IoIosBed } from "react-icons/io";
import { GiReceiveMoney } from "react-icons/gi";
import { FaMoneyBillTransfer, FaMoneyBillTrendUp } from "react-icons/fa6";


const Reporst = () => {
  return (
    <div>
      <div
        className="bg-cover bg-center bg-gray-200 rounded-lg"
      >
        <div className="p-4">
          <h1 className="text-black font-bold text-xl">ການລາຍງານ</h1>
        </div>

        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card
            icon={
              <FaUsers className="text-4xl text-blue-600 hover:border-blue-600" />
            }
            title="ຜູ້ເຊົ່າທ້ງໜົດ"
            value="100 (ຄົນ)"
          />
          <Card
            icon={
              <IoIosBed className="text-4xl text-green-600 hover:border-green-600" />
            }
            title="ຫ້ອງທັງໜົດ"
            value="20 (ຫ້ອງ)"
          />
          <Card
            icon={
              <FaBed className="text-4xl text-red-600 hover:border-red-600" />
            }
            title="ຫ້ອງເຕັມ"
            value="10 (ຫ້ອງ)"
          />
          <Card
            icon={
              <IoIosBed className="text-4xl text-pink-600 hover:border-pink-600" />
            }
            title="ຫ້ອງວ່າງ"
            value="10 (ຫ້ອງ)"
          />
           <Card
            icon={
              <GiReceiveMoney className="text-4xl text-yellow-600 hover:border-yellow-600" />
            }
            title ="ລາຍໄດ້ຕໍວັນ"
            value="10.000.000 ກີບ"
          />
           <Card
            icon={
              <FaMoneyBillTransfer className="text-4xl text-yellow-600 hover:border-yellow-600" />
            }
            title ="ລາຍໄດ້ຕໍເດືອນ"
            value="20.000.000 ກີບ"
          />
           <Card
            icon={
              <FaCoins className="text-4xl text-yellow-600 hover:border-yellow-600" />
            }
            title="ລາຍໄດ້ຕໍປີ"
            value="240.000.000 ກີບ"
          />
          <Card
            icon={
              <FaMoneyBillTrendUp className="text-4xl text-yellow-600 hover:border-yellow-600" />
            }
            title ="ລາຍທັັງໝົດ"
            value="240.000.000 ກີບ"
          /><br/><br/>
        </div>
      </div>
    </div>
  );
};

const Card = ({ icon, title, value, borderColor }) => (
  <div
    className={`bg-teal-100 p-12 shadow-xl rounded-xl flex items-center border hover:border-${borderColor}`}
  >
    {icon}
    <div className="ml-6">
      <h3 className="text-xl text-black">{title}</h3>
      <p className="text-black">{value}</p>
    </div>
  </div>
);

export default Reporst;
