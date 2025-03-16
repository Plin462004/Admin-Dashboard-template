import { useState } from "react";
import { UploadCloud } from "lucide-react";
import { FaAngleDoubleLeft } from "react-icons/fa";

export default function UsersForm() {
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
    if (formData.password !== formData.confirmPassword) {
      alert("ປ້ອນລະຫັດຜ່ານບໍ່ຕົງກັນ!");
      return;
    }
    if (!image) {
      alert("ກະລຸນາເລືອກ ຮູບພາບ!");
      return;
    }
    console.log(formData);
  };

  const handleReset = () => {
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
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-100 shadow-lg rounded-lg">
        <button
    type="button"
    className="w-12 bg-gradient-to-r from-sky-600 to-teal-800 text-xl border border-blue-600 text-white p-2 hover:bg-gray-400 hover:text-white rounded-2xl"
  >
    <a href=""><FaAngleDoubleLeft className="text-2xl"/></a>
  </button>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* ອັບໂຫລດຮູບພາບ */}
        <div className="flex flex-col items-center mb-4">
          <label htmlFor="imageUpload" className="cursor-pointer">
            <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-gray-300 flex items-center justify-center relative">
              {image ? (
                <img src={image} alt="Profile" className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center bg-gray-200 text-gray-500">
                  <UploadCloud size={48} className="mb-1" />
                  <p className="text-lg">ອັບໂຫລດຮູບພາບ</p>
                  <button
            type="button"
            className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-2xl shadow hover:bg-blue-600"
          >
            Upload
          </button>
                </div>
              )}
            </div>
          </label>
          <input
            type="file"
            id="imageUpload"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
          />
          
        </div>

        {/* ຂໍ້ມູນຟອມ */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block font-semibold mb-1 text-xl">ຊື່</label>
            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="w-full p-3 text-lg border hover:border-green-600 rounded-3xl" required />
          </div>
          <div>
            <label className="block font-semibold mb-1 text-xl">ນາມສະກຸນ</label>
            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="w-full p-3 text-lg border hover:border-green-600 rounded-3xl" required />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block font-semibold mb-1 text-xl">ເບີໂທ</label>
            <input type="tel" name="tel" value={formData.tel} onChange={handleChange} className="w-full p-3 text-lg border hover:border-green-600 rounded-3xl" required />
          </div>
          <div>
            <label className="block font-semibold mb-1 text-xl">ອີເມວ</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-3 text-lg border hover:border-green-600 rounded-3xl" required />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block font-semibold mb-1 text-xl">ລະຫັດຜ່ານ</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange} className="w-full p-3 text-lg border hover:border-green-600 rounded-3xl" required />
          </div>
          <div>
            <label className="block font-semibold mb-1 text-xl">ຢືນຢັນລະຫັດຜ່ານ</label>
            <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} className="w-full p-3 text-lg border hover:border-green-600 rounded-3xl" required />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block font-semibold mb-1 text-xl">ສະຖານະ</label>
          <select name="status" value={formData.status} onChange={handleChange} className="w-full p-3 text-lg border hover:border-green-600 rounded-3xl" required>
            <option value="">ເລືອກສະຖານະ</option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
            <label className="block font-semibold mb-1 text-xl">ໝາຍເຫດ :</label>
            <input type="remark" name="remark" value={formData.remark} onChange={handleChange} className="w-full p-3 text-lg border hover:border-green-600 rounded-3xl" required />
          </div>
        </div>
        <br /><br />
        <div className="text-center flex justify-center gap-8">
  <button
    type="button"
    onClick={handleReset}
    className="w-24 text-xl border border-red-600 text-red-600 p-3 hover:bg-red-600 hover:text-white rounded-3xl"
  >
    ຍົກເລີກ
  </button>
  <button
    type="submit"
    className="w-24 text-xl border border-blue-600 bg-blue-600 text-white p-3 hover:bg-green-600 hover:text-white rounded-3xl"
  >
    ບັນທຶກ
  </button>
</div>

      </form>
    </div>
  );
}
