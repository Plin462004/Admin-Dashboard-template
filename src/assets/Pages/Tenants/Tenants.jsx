import { useState } from "react";
import { UploadCloud } from "lucide-react";
import { FaAngleDoubleLeft } from "react-icons/fa";

export default function Tenants() {
  const [formData, setFormData] = useState({
    fname: "",
      lname: "",
      tel: "",
      email: "",
      remark: ""
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

  const handleSubmit = () => {
    if (!image) {
      alert("ກະລຸນາເລືອກ ຮູບຫ້ອງກ່ອນ!");
      return;
    }
    if (!type_room) {
      alert("ກະລຸນາເລືອກ ປະເພດຫ້ອງກ່ອນ!");
      return;
    }
    console.log(formData);
  };

  const handleReset = () => {
    setFormData({
      type_room: "",
      floor: "",
      room_name: "",
      price: "",
      remark: ""
    });
    setImage(null);
  };

  return (
    <div className="max-w-4xl mx-auto mt-2 p-6 bg-gray-100 shadow-lg">
  <h1 className="text-2xl font-semibold">ເພີ່ມຜູ້ເຊົ່າ :</h1>
       
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
            <label className="block font-semibold mb-1 text-lg">ຊື່</label>
            <input type="text" name="fname" value={formData.fname} onChange={handleChange} className="w-full p-3 text-lg border hover:border-green-600 rounded-3xl" required />
          </div>
          <div>
            <label className="block font-semibold mb-1 text-lg">ນາມສະກຸນ</label>
            <input type="text" name="lname" value={formData.lname} onChange={handleChange} className="w-full p-3 text-lg border hover:border-green-600 rounded-3xl" required />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block font-semibold mb-1 text-lg">ເບີໂທ</label>
            <input type="text" name="lname" value={formData.lname} onChange={handleChange} className="w-full p-3 text-lg border hover:border-green-600 rounded-3xl" required />
          </div>
          <div>
            <label className="block font-semibold mb-1 text-lg">ອີເມວ</label>
            <input type="text" name="room_name" value={formData.room_name} onChange={handleChange} className="w-full p-3 text-lg border hover:border-green-600 rounded-3xl" required />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block font-semibold mb-1 text-lg">ບ້ານ</label>
            <input type="text" name="vill" value={formData.vill} onChange={handleChange} className="w-full p-3 text-lg border hover:border-green-600 rounded-3xl" required />
          </div>
          <div>
            <label className="block font-semibold mb-1 text-lg">ເມືອງ</label>
            <input type="text" name="room_name" value={formData.room_name} onChange={handleChange} className="w-full p-3 text-lg border hover:border-green-600 rounded-3xl" required />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block font-semibold mb-1 text-lg">ເເຂວງ</label>
            <input type="number" name="price" value={formData.price} onChange={handleChange} className="w-full p-3 text-lg border hover:border-green-600 rounded-3xl" required />
          </div>
          <div>
          <label className="block font-semibold mb-1 text-lg">ເລືອກເອກະສານປະຈຳຕົວ</label>
            <select name="floor" value={formData.floor} onChange={handleChange} className="w-full p-3 text-lg border hover:border-green-600 rounded-3xl" required>
            <option value="">ເລືອກເອກະສານ</option>
            <option value="ປື້ມສຳມະໂນ">ປື້ມສຳມະໂນ</option>
            <option value="ບັດປະຈຳຕົວ">ບັດປະຈຳຕົວ</option>
            <option value="ໃບຢັ່ງຢືນທີ່ຢູ່">ໃບຢັ່ງຢືນທີ່ຢູ່</option>
            <option value="ພາດສະປອດ">ພາດສະປອດ</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
        <div>
            <label className="block font-semibold mb-1 text-lg">ເລກບັດປະຈຳຕົວ</label>
            <input type="number" name="card_id" value={formData.card_id} onChange={handleChange} className="w-full p-3 text-lg border hover:border-green-600 rounded-3xl" required />
          </div>
        <div>
            <label className="block font-semibold mb-1 text-lg">ວັນທີເຂົ້າພັກ</label>
            <input type="date" name="price" value={formData.price} onChange={handleChange} className="w-full p-3 text-lg border hover:border-green-600 rounded-3xl" required />
          </div><br />
        </div>
         <div>
            <label className="block font-semibold mb-1 text-lg">ຮູບເອກະສານ</label>
            <label htmlFor="imageUpload" className="cursor-pointer">
            <div className="w-90 h-20 rounded-3xl overflow-hidden border-4 border-gray-300 flex items-center justify-center relative">
              {image ? (
                <img src={image} alt="Profile" className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center bg-gray-200 text-gray-500">
                  <UploadCloud size={48} className="mb-1" />
                  <p className="text-lg">ອັບໂຫລດຮູບພາບ</p>
                </div>
              )}
            </div>
          </label>
           </div>
        <hr /><br />

        <h1 className="text-2xl font-semibold">ຂໍ້ມນຫ້ອງ :</h1>
        <div className="grid grid-cols-2 gap-4">
           <div>
            <label className="block font-semibold mb-1 text-lg">ເບີຫ້ອງ</label>
            <input type="number" name="card_id" value={formData.card_id} onChange={handleChange} className="w-full p-3 text-lg border hover:border-green-600 rounded-3xl" required />
          </div>
        <div>
          <label className="block font-semibold mb-1 text-lg">ຊັ້ນ</label>
          <select name="floor" value={formData.floor} onChange={handleChange} className="w-full p-3 text-lg border hover:border-green-600 rounded-3xl" required>
            <option value="">ເລືອກຊັ້ນ</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        </div>
         <div className="grid grid-cols-2 gap-4">
        <div>
            <label className="block font-semibold mb-1 text-lg">ຄ່າເຊົ່າ</label>
            <input type="number" name="card_id" value={formData.card_id} onChange={handleChange} className="w-full p-3 text-lg border hover:border-green-600 rounded-3xl" required />
          </div>
        <div>
            <label className="block font-semibold mb-1 text-lg">ຄ່າມັດຈຳ</label>
            <input type="text" name="r" value={formData.r} onChange={handleChange} className="w-full p-3 text-lg border hover:border-green-600 rounded-3xl" required />
          </div>
          </div>
        <div>
            <label className="block font-semibold mb-1">ລາຍລະອຽດ :</label>
            <input type="remark" name="remark" value={formData.remark} onChange={handleChange} className="w-full p-3 text-lg border hover:border-green-600 h-36" required />
          </div><br />

          <h1 className="text-2xl font-semibold">ເອກະສານ :</h1>
        <div>
            <label className="block font-semibold mb-1 text-lg">ຮູບເອກະສານ</label>
            <label htmlFor="imageUpload" className="cursor-pointer">
            <div className="w-full h-60 rounded-3xl overflow-hidden border-4 border-gray-300 flex items-center justify-center relative">
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
            ສ້າງເອກະສານສັນຍາເຊົ່າ
          </button>
                </div>
              )}
            </div>
          </label>
           </div>

        <br /><br />
        <div className="text-center flex justify-center gap-8">
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
