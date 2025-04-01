import React from "react";
import { FaBed, FaUsers } from "react-icons/fa";
import { IoIosBed } from "react-icons/io";

const Content = () => {
  return (
    <div>
      <div
        className="bg-cover bg-center bg-no-repeat text-white rounded-xl"
        style={{ backgroundImage: "url('src/assets/img/D.jpg')" }}
      >
        <div className="p-4">
          <h1 className="text-white font-bold text-2xl">Hello, Soulin</h1>
          <p className="text-white text-xl">
            ສະບາຍດີ, ຍິນດີຕ້ອນຮັບເຂົ້າສູ່ລະບົບ ບໍລິຫານ APARTMENT
          </p>
        </div>

        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-2xl">
          <Card
            icon={
              <FaUsers className="text-5xl text-blue-600 hover:border-blue-600" />
            }
            title="ຜູ້ເຊົ່າທັງໝົດ"
            value="100 ຄົນ"
            borderColor="blue-600"
          />
          <Card
            icon={
              <IoIosBed className="text-5xl text-green-600 hover:border-green-600" />
            }
            title="ຫ້ອງທັງໝົດ"
            value="20 ຫ້ອງ"
            borderColor="green-600"
          />
          <Card
            icon={
              <IoIosBed className="text-5xl text-pink-600 hover:border-pink-600 " />
            }
            title="ຫ້ອງວ່າງ"
            value="10 ຫ້ອງ"
            borderColor="pink-600"
          />
          <Card
            icon={
              <FaBed className="text-5xl text-red-600 hover:border-red-600" />
            }
            title="ຫ້ອງເຕັມ"
            value="10 ຫ້ອງ"
            borderColor="red-600"
          />
        </div>
      </div>
    </div>
  );
};

const Card = ({ icon, title, value, borderColor }) => (
  <div
    className={`bg-gray-100 p-12 shadow-xl rounded-xl flex items-center border hover:border-${borderColor}`}
  >
    {icon}
    <div className="ml-6">
      <h3 className="text-xl text-black">{title}</h3>
      <p className="text-black">{value}</p>
    </div>
  </div>
);

export default Content;
