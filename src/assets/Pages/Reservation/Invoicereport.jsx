import React from 'react';

const InvoiceReport = () => {
  return (
    <div className="flex flex-row max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
      {/* ฝั่งซ้าย - ใบแจ้งส่ง */}
      <div className="w-1/2 p-6 flex flex-col">
        <h2 className="text-lg font-bold text-blue-600 mb-6">ໃບແຈ້ງສົ່ງ</h2>
        
        <div className="mb-5">
          <div className="flex mb-3">
            <span className="w-20 font-medium">ຊື່:</span>
            <span>ທ່ານຕຸ້ມ</span>
          </div>
          
          <div className="flex mb-3">
            <span className="w-20 font-medium">ບ້ານສະຖານ:</span>
            <span>ປີທຸມໄຊ</span>
          </div>
          
          <div className="flex mb-3">
            <span className="w-20 font-medium">ເບີໂທ:</span>
            <span>020 55555555</span>
          </div>
          
          <div className="flex mb-3">
            <span className="w-20 font-medium">ວັນທີຂອງ:</span>
            <span>10-10-2024</span>
          </div>
        </div>
      </div>
      
      {/* ฝั่งขวา - รับแล้ว */}
      <div className="w-1/2 p-6 flex flex-col border-l border-gray-100">
        <div className="flex justify-between mb-4">
          <h2 className="text-lg font-bold text-blue-600">ຮັບແລ້ວ</h2>
          
          {/* ปุ่มสถานะ */}
          <div className="flex space-x-2">
            <button className="px-3 py-1 bg-cyan-500 text-white text-xs font-medium rounded-full">ຮັບຫມົດ</button>
            <button className="px-3 py-1 bg-red-400 text-white text-xs font-medium rounded-full">ຍັງຫຍັງ</button>
          </div>
        </div>
        
        {/* รูปภาพ grid */}
        <div className="grid grid-cols-2 gap-2 mb-5">
          <div className="bg-gray-200 h-16 rounded"></div>
          <div className="bg-gray-200 h-16 rounded"></div>
          <div className="bg-gray-200 h-16 rounded"></div>
          <div className="bg-gray-200 h-16 rounded"></div>
        </div>
        
        {/* ข้อมูลผู้รับ */}
        <div className="mb-5 text-sm">
          <div className="flex mb-2">
            <span className="w-20 font-medium">ຊື່:</span>
            <span>ທ່ານດາເດັນທີ່ຝຶກເບີຝຸ່ນ</span>
          </div>
          
          <div className="flex mb-2">
            <span className="w-20 font-medium">ທີ່ຢູ່:</span>
            <span>ຫີນບຸນຫວອງ ຈຳປາລາວ ນະຄອນຫລວງວຽງຈັນ</span>
          </div>
          
          <div className="flex mb-2">
            <span className="w-20 font-medium">ເບີໂທ:</span>
            <span>020 55555555</span>
          </div>
          
          <div className="flex mb-2">
            <span className="w-20 font-medium">ປະເພດລົດຂົນສົ່ງ:</span>
            <span>ລາວໂປ</span>
          </div>
          
          <div className="flex mb-2">
            <span className="w-20 font-medium">ລາຄາ:</span>
            <span>20,000,000 ກີບ/ປີ</span>
          </div>
          
          <div className="flex mb-2 items-start">
            <span className="w-20 font-medium">ຈຳນວນຂົນສົ່ງ:</span>
            <div className="text-xs">
              <p>ສາມສະຫຽຸກ: ຂີ້ເລື່ອຍຈຳວນ 3 ຫຼິສຕາຍຫລາຍ 2 ຕໍ່ແຫ່ງ 1/2ຊົ່ວ</p>
              <p>ແລະແກນໜາຍໄມ້ເປັນຫວ້າຝາມຸ</p>
              <p>ໃດ້ທົ່ວຄ່າຂົນສົ່ງຈາກມາຫາຫນາມແລ້ວ</p>
              <p>ໂດຍບໍ່ແມ່ນຄ່າລຶ້ເຂົ້າ.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceReport;