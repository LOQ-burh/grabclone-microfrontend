import { useState } from 'react';
// import logoGrabWhite from "../../assets/logo-grabfood-white2.svg";
// import logoGrabGreen from "../../assets/logo-grabfood-green.svg";

function Header() {
  const [ImgHeader, setImgHeader] = useState("https://food.grab.com/static/images/logo-grabfood-white2.svg")
    const [color, setColor] = useState("transparent")
    const changeColor = () => {
        if (window.scrollY >= 90) {
            setColor("white")
            setImgHeader("https://food.grab.com/static/images/logo-grabfood2.svg")
        }
        else {
            setColor("transparent")
            setImgHeader("https://food.grab.com/static/images/logo-grabfood-white2.svg")
        }
    }
    window.addEventListener('scroll', changeColor)
  return (
    <header className="fixed z-10 h-20 w-full flex justify-center items-center" style={{ backgroundColor: color }}>
      <div className="border-gray-200 px-4 py-2.5 lg:px-6 dark:bg-gray-800" style={{ width: '1200px' }}>
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between">
          <a href="/" className="flex items-center">
            <img
              src={ImgHeader}
              className="mr-3 h-6 sm:h-9"
              alt="Grab Logo"
            />
            
          </a>
          <div className="flex items-center lg:order-2">
            <a
              href="#"
              className="bg-white border-gray-100 mr-2 rounded px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:outline-none focus:ring-4 focus:ring-gray-300 lg:px-5 lg:py-2.5 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              style={{border: '1px solid #ccc'}}
            >
              Đăng nhập/Đăng kí
            </a>
            <a
              href="#"
              className="bg-white border-gray-100 bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 mr-2 rounded px-4 py-2 text-sm font-medium text-gray-500 focus:outline-none focus:ring-4 lg:px-5 lg:py-2.5"
              style={{border: '1px solid #ccc'}}
            >
              VI
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
