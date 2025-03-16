import { useState } from "react";
import { UploadCloud } from "lucide-react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export default function Formrooms() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    room_number: "",
    floor: "",
    size: "",
    price: "",
    deposit: "",
    status: "",
    remark: "",
  });

  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!image) {
      alert("ກະລຸນາເລືອກ ຮູບຫ້ອງກ່ອນ!");
      return;
    }
    console.log("Form Data:", formData);
  };

  const handleReset = () => {
    const confirmReset = window.confirm("ທ່ານແນ່ໃຈບໍ່ວ່າຈະລົບຂໍ້ມູນທັງໝົດ?");
    if (confirmReset) {
      setFormData({
        room_number: "",
        floor: "",
        size: "",
        price: "",
        deposit: "",
        status: "",
        remark: "",
      });
      setImage(null);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto mt-2 p-6 bg-gray-100 shadow-lg rounded-lg">
      {/* ปุ่มย้อนกลับ */}
      <div className="flex justify-start mb-4">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-xl text-blue-600 hover:underline"
        >
          <IoMdArrowRoundBack className="text-3xl" />
          <span>ເພີ່ມຫ້ອງ</span>
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* ອັບໂຫລດຮູບພາບ */}
        <div>
          <label htmlFor="imageUpload" className="cursor-pointer">
            <div className="w-full h-40 rounded-2xl overflow-hidden border-4 border-gray-300 flex items-center justify-center relative">
              {image ? (
                <img
                  src={image}
                  alt="Room"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center bg-gray-200 text-gray-500">
                  <UploadCloud size={48} className="mb-1" />
                  <p className="text-lg">ອັບໂຫລດຮູບພາບ</p>
                </div>
              )}
            </div>
          </label>
          <input
            type="file"
            id="imageUpload"
            onChange={handleImageChange}
            accept="image/*"
            className="hidden"
          />
        </div>

        {/* ຂໍ້ມູນຟອມ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block font-semibold mb-1 text-lg">ເບີຫ້ອງ</label>
            <input
              type="text"
              name="room_number"
              value={formData.room_number}
              onChange={handleChange}
              className="w-full p-3 text-lg border hover:border-green-600 rounded-xl"
              required
            />
          </div>
          <div>
            <label className="block font-semibold mb-1 text-lg">ຊັ້ນ</label>
            <select
              name="floor"
              value={formData.floor}
              onChange={handleChange}
              className="w-full p-3 text-lg border hover:border-green-600 rounded-xl"
              required
            >
              <option value="">ເລືອກຊັ້ນ</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block font-semibold mb-1 text-lg">ຂະໜາດ</label>
            <input
              type="text"
              name="size"
              value={formData.size}
              onChange={handleChange}
              className="w-full p-3 text-lg border hover:border-green-600 rounded-xl"
              required
            />
          </div>
          <div>
            <label className="block font-semibold mb-1 text-lg">ຄ່າເຊົ່າ</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="w-full p-3 text-lg border hover:border-green-600 rounded-xl"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block font-semibold mb-1 text-lg">ຄ່າມັດຈຳ</label>
            <input
              type="number"
              name="deposit"
              value={formData.deposit}
              onChange={handleChange}
              className="w-full p-3 text-lg border hover:border-green-600 rounded-xl"
              required
            />
          </div>
          <div>
            <label className="block font-semibold mb-1 text-lg">ສະຖານະ</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full p-3 text-lg border hover:border-green-600 rounded-xl"
              required
            >
              <option value="">ເລືອກສະຖານະ</option>
              <option value="ເຕັມ">ເຕັມ</option>
              <option value="ວ່າງ">ວ່າງ</option>
              <option value="ຖືກຈອງ">ຖືກຈອງ</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block font-semibold mb-1">ລາຍລະອຽດ :</label>
          <textarea
            name="remark"
            value={formData.remark}
            onChange={handleChange}
            className="w-full h-32 p-3 text-lg border hover:border-green-600 rounded-xl"
            required
          />
        </div>

        {/* ปุ่ม */}
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          <button
            type="button"
            onClick={handleReset}
            className="w-24 text-lg border border-red-600 text-red-600 p-3 hover:bg-red-600 hover:text-white rounded-3xl"
          >
            ຍົກເລີກ
          </button>
          <button
            type="submit"
            className="w-24 text-lg border border-blue-600 bg-blue-600 text-white p-3 hover:bg-green-600 hover:text-white rounded-3xl"
          >
            ບັນທຶກ
          </button>
        </div>
      </form>
    </div>
  );
}
