import { useState } from "react";
import { UploadCloud } from "lucide-react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export default function Formplus() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    status: "",
    tel: "",
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
    if (window.confirm("ທ່ານແນ່ໃຈບໍ່ວ່າຈະລົບຂໍ້ມູນທັງໝົດ?")) {
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        status: "",
        tel: "",
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
          className="flex items-center gap-2 text-xl text-black hover:underline"
        >
          <IoMdArrowRoundBack className="text-3xl" />
          <span>ເພີ່ມຜູ້ຈອງ</span>
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* ອັບໂຫລດຮູບພາບ */}
        <div>
          <label htmlFor="imageUpload" className="cursor-pointer block w-full">
            <div className="w-full h-40 rounded-xl overflow-hidden border-4 border-gray-300 flex items-center justify-center relative">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { label: "ເບີຫ້ອງ", name: "room_number", type: "text" },
            {
              label: "ຊັ້ນ",
              name: "floor",
              type: "select",
              options: ["", "1", "2", "3", "4", "5"],
            },
            {
              label: "ຂະໜາດຫ້ອງ",
              name: "size",
              type: "select",
              options: ["", "8 X 5 CM", "10 X 5 CM", "12 X 8 CM"],
            },
            { label: "ລາຄາ", name: "price", type: "number" },
            { label: "ຄ່າມັດຈຳ", name: "deposit", type: "number" },
            { label: "ຊື່ຜູ້ຈອງ", name: "r_name", type: "text" },
            { label: "ເບີໂທ", name: "tel", type: "tel" },
            { label: "ວັນທີຈອງ", name: "date", type: "date" },
          ].map(({ label, name, type, options }) => (
            <div key={name}>
              <label className="block font-semibold mb-1 text-lg">{label}</label>
              {type === "select" ? (
                <select
                  name={name}
                  value={formData[name]}
                  onChange={handleChange}
                  className="w-full p-3 text-lg border hover:border-green-600 rounded-xl"
                  required
                >
                  {options.map((option, idx) => (
                    <option key={idx} value={option}>
                      {option || `ເລືອກ${label}`}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type={type}
                  name={name}
                  value={formData[name]}
                  onChange={handleChange}
                  className="w-full p-3 text-lg border hover:border-green-600 rounded-xl"
                  required
                />
              )}
            </div>
          ))}
        </div>

        {/* ລາຍລະອຽດ */}
        <div>
          <label className="block font-semibold mb-1">ລາຍລະອຽດ</label>
          <textarea
            name="remark"
            value={formData.remark}
            onChange={handleChange}
            className="w-full h-32 p-3 text-lg border hover:border-green-600 rounded-xl"
            required
          />
        </div>

        {/* ປຸ່ມ */}
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




