// นำเข้ารูปภาพตัวอย่าง - คุณควรนำเข้ารูปที่คุณมี
import defaultImage from "/src/assets/img/Lin2.jpg";
import linImage from "/src/assets/img/Lin.jpg";
import DImage from "/src/assets/img/D.jpg";
import MDImage from "/src/assets/img/MD.jpg";
import Image from "/src/assets/img/Lin4.jpg";
import lImage from "/src/assets/img/Lin3.jpg";

const reservationsData = [
  {
    id: 1,
    image: defaultImage,
    firstName: "ສົມຈາຍ",
    lastName: "ໄຊສີ",
    phone: "081-234-5678",
    status: "Admin",
    email: "somchai@example.com"
  },
  {
    id: 2,
    image: linImage,
    firstName: "ສົມຫຍັງ",
    lastName: "ຈັກເຣຍນ",
    phone: "089-876-5432",
    status: "User",
    email: "somying@example.com"
  },
  {
    id: 3,
    image: DImage,
    firstName: "ປຣະເສິຖ",
    lastName: "ດຳມີ",
    phone: "062-345-6789",
    status: "User",
    email: "prasert@example.com"
  },
  {
    id: 4,
    image: MDImage,
    firstName: "ນາຟາ",
    lastName: "ຟ້າໄຊ",
    phone: "091-234-5678",
    status: "Admin",
    email: "napha@example.com"
  },
  {
    id: 5,
    image: Image,
    firstName: "ວິໄຊ",
    lastName: "ສຳລິດ",
    phone: "085-987-6543",
    status: "User",
    email: "wichai@example.com"
  },
  {
    id: 6,
    image: lImage,
    firstName: "ມານີ",
    lastName: "ສິດທິສ",
    phone: "085-987-6543",
    status: "User",
    email: "manee@example.com"
  },
];

export default reservationsData;