import React, { useState } from 'react';
// นำเข้ารูปภาพตัวอย่าง - คุณควรนำเข้ารูปที่คุณมี
import defaultImage from "/src/assets/img/Lin2.jpg";
import linImage from "/src/assets/img/Lin.jpg";
import DImage from "/src/assets/img/D.jpg";
import MDImage from "/src/assets/img/MD.jpg";
import Image from "/src/assets/img/Lin4.jpg";
import lImage from "/src/assets/img/Lin3.jpg";
// หากคุณมีรูปเพิ่มเติม ให้นำเข้าตรงนี้ เช่น
// import profile1 from "/src/assets/img/profile1.jpg";
// import profile2 from "/src/assets/img/profile2.jpg";

const UserTable = () => {
  // ข้อมูลผู้ใช้จำลอง
  const [users, setUsers] = useState([
    {
      id: "01",
      fname: "สมชาย",
      lname: "ใจดี",
      phone: "081-234-5678",
      status: "active",
      email: "somchai@example.com",
      profileImage: defaultImage // ใช้รูปโปรไฟล์เริ่มต้น
    },
    {
      id: "02",
      fname: "สมหญิง",
      lname: "รักเรียน",
      phone: "089-876-5432",
      status: "active",
      email: "somying@example.com",
      profileImage: linImage // ใช้รูปโปรไฟล์เริ่มต้น
    },
    {
      id: "03",
      fname: "ประเสริฐ",
      lname: "มั่งมี",
      phone: "062-345-6789",
      status: "inactive",
      email: "prasert@example.com",
      profileImage: DImage // ใช้รูปโปรไฟล์เริ่มต้น
    },
    {
      id: "04",
      fname: "นภา",
      lname: "ฟ้าใส",
      phone: "091-234-5678",
      status: "pending",
      email: "napha@example.com",
      profileImage: Image // ใช้รูปโปรไฟล์เริ่มต้น
    },
    {
      id: "05",
      fname: "วิชัย",
      lname: "ช่างคิด",
      phone: "085-987-6543",
      status: "active",
      email: "wichai@example.com",
      profileImage: MDImage // ใช้รูปโปรไฟล์เริ่มต้น
    },
    {
      id: "06",
      fname: "มานี",
      lname: "มีศักดิ์",
      phone: "085-987-6543",
      status: "active",
      email: "manee@example.com",
      profileImage: lImage // ใช้รูปโปรไฟล์เริ่มต้น
    },
    
  ]);

  // สถานะการค้นหา
  const [searchTerm, setSearchTerm] = useState("");
  
  // สถานะแสดง/ซ่อนฟอร์มเพิ่ม User
  const [showAddForm, setShowAddForm] = useState(false);
  
  // ข้อมูลฟอร์มเพิ่ม User
  const [newUser, setNewUser] = useState({
    id: "",
    fname: "",
    lname: "",
    phone: "",
    status: "active",
    email: "",
    profileImage: defaultImage
  });

  // สถานะสำหรับเก็บรูปโปรไฟล์ที่จะอัปโหลด
  const [selectedImage, setSelectedImage] = useState(null);

  // แปลงสถานะเป็นภาษาไทย
  const getStatusText = (status) => {
    switch(status) {
      case 'active': return 'ใช้งาน';
      case 'inactive': return 'ไม่ใช้งาน';
      case 'pending': return 'รอดำเนินการ';
      default: return status;
    }
  };

  // กำหนดคลาสสำหรับแต่ละสถานะ
  const getStatusClasses = (status) => {
    switch(status) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'inactive':
        return 'bg-red-100 text-red-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  
  // กรองข้อมูลผู้ใช้ตามคำค้นหา
  const filteredUsers = users.filter(user => 
    user.fname.toLowerCase().includes(searchTerm.toLowerCase()) || 
    user.lname.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.phone.includes(searchTerm)
  );
  
  // จัดการการเปลี่ยนแปลงในฟอร์มเพิ่ม User
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };
  
  // จัดการการอัปโหลดรูปโปรไฟล์
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };
  
  // เพิ่ม User ใหม่
  const handleAddUser = (e) => {
    e.preventDefault();
    // สร้าง ID อัตโนมัติ
    const newId = (users.length + 1).toString().padStart(2, '0');
    
    // สร้าง User ใหม่พร้อมรูปโปรไฟล์
    const userToAdd = { 
      ...newUser, 
      id: newId,
      profileImage: selectedImage || defaultImage // ใช้รูปที่อัปโหลดหรือรูปเริ่มต้น
    };
    
    setUsers([...users, userToAdd]);
    
    // รีเซ็ตฟอร์ม
    setNewUser({
      id: "",
      fname: "",
      lname: "",
      phone: "",
      status: "active",
      email: "",
      profileImage: defaultImage
    });
    setSelectedImage(null);
    setShowAddForm(false);
  };

  // ฟังก์ชันเพื่อเปลี่ยนรูปโปรไฟล์ของผู้ใช้ที่มีอยู่แล้ว
  const handleChangeProfileImage = (userId, e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      
      // อัปเดตรูปโปรไฟล์ของผู้ใช้ที่เลือก
      const updatedUsers = users.map(user => {
        if (user.id === userId) {
          return { ...user, profileImage: imageUrl };
        }
        return user;
      });
      
      setUsers(updatedUsers);
    }
  };

  return (
    <div className="container mx-auto p-6">
      {/* ย้ายหัวข้อให้อยู่บนสุดแยกออกมา */}
      <div className="mb-4">
        <h1 className="text-2xl font-bold">ຕາຕະລາງ User</h1>
      </div>
      
      {/* ย้ายปุ่มค้นหาและเพิ่มมาไว้ด้านล่างหัวข้อ */}
      <div className="flex flex-wrap justify-between items-center mb-6">
        <div className="relative mb-2 sm:mb-0">
          <input
            type="text"
            placeholder="ค้นหา User..."
            className="border border-gray-300 rounded-3xl py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="absolute left-3 top-3 text-gray-400">
            {/* ไอคอนค้นหา */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
        
        {/* ปุ่มเพิ่ม User */}
        <button 
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg flex items-center"
          onClick={() => setShowAddForm(!showAddForm)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          ເພີ່ມ
        </button>
      </div>
      
      {/* ฟอร์มเพิ่ม User */}
      {showAddForm && (
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-xl font-bold mb-4">เพิ่ม User</h2>
          <form onSubmit={handleAddUser} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">ชื่อ</label>
              <input
                type="text"
                name="fname"
                value={newUser.fname}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">นามสกุล</label>
              <input
                type="text"
                name="lname"
                value={newUser.lname}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">เบอร์โทร</label>
              <input
                type="text"
                name="phone"
                value={newUser.phone}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={newUser.email}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">สถานะ</label>
              <select
                name="status"
                value={newUser.status}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="active">User</option>
                <option value="inactive">Admin</option>
              </select>
            </div>
            
            {/* ส่วนอัปโหลดรูปโปรไฟล์ */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">รูปโปรไฟล์</label>
              <div className="flex items-center space-x-4">
                {/* แสดงตัวอย่างรูปที่เลือก */}
                <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-100">
                  <img 
                    src={selectedImage || defaultImage} 
                    alt="Profile Preview" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="flex-1 border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            
            <div className="md:col-span-2 flex justify-end gap-3 mt-4">
              <button
                type="button"
                onClick={() => setShowAddForm(false)}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-lg"
              >
                ยกเลิก
              </button>
              <button
                type="submit"
                className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg"
              >
                บันทึก
              </button>
            </div>
          </form>
        </div>
      )}
      
      <div className="overflow-x-auto shadow-md rounded-lg">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="bg-gray-200 text-gray-black uppercase text-lg leading-normal">
              <th className="py-3 px-6 text-left">ID</th>
              <th className="py-3 px-6 text-left">รูปภาพ</th>
              <th className="py-3 px-6 text-left">ชื่อ</th>
              <th className="py-3 px-6 text-left">นามสกุล</th>
              <th className="py-3 px-6 text-left">เบอร์โทร</th>
              <th className="py-3 px-6 text-left">สถานะ</th>
              <th className="py-3 px-6 text-left">Email</th>
              <th className="py-3 px-6 text-center">จัดการ</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm">
            {filteredUsers.map((user) => (
              <tr key={user.id} className="border-b border-gray-200 hover:bg-gray-50">
                <td className="py-3 px-6 text-left">{user.id}</td>
                <td className="py-3 px-6 text-left">
                  <div className="relative group">
                    <img
                      src={user.profileImage}
                      alt={`${user.fname}'s Profile`}
                      className="w-10 h-10 rounded-full object-cover cursor-pointer"
                    />
                    {/* เพิ่มปุ่มเปลี่ยนรูปเมื่อวางเมาส์เหนือรูป */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black bg-opacity-50 rounded-full">
                      <label className="cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <input 
                          type="file" 
                          accept="image/*" 
                          className="hidden" 
                          onChange={(e) => handleChangeProfileImage(user.id, e)}
                        />
                      </label>
                    </div>
                  </div>
                </td>
                <td className="py-3 px-6 text-left">{user.fname}</td>
                <td className="py-3 px-6 text-left">{user.lname}</td>
                <td className="py-3 px-6 text-left">{user.phone}</td>
                <td className="py-3 px-6 text-left">
                  <span className={`px-2 py-1 rounded-full text-xs ${getStatusClasses(user.status)}`}>
                    {getStatusText(user.status)}
                  </span>
                </td>
                <td className="py-3 px-6 text-left">{user.email}</td>
                <td className="py-3 px-6 text-center">
                  <div className="flex justify-center items-center space-x-2">
                    <button className="text-blue-500 hover:text-blue-700">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                      </svg>
                    </button>
                    <button className="text-red-500 hover:text-red-700">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTable;