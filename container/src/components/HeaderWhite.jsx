import FormHeaderSearch from "../layouts/FormHeaderSearch";
import logoGrabGreen from "../../assets/logo-grabfood-green.svg";

function HeaderWhite() {
  return (
    <header className="fixed z-10 flex h-20 w-full  items-center justify-center  bg-white">
      <div
        className="border-gray-200 px-4 py-2.5 lg:px-6 dark:bg-gray-800"
        style={{ width: "1200px" }}
      >
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="mr-20">
              <img
                src={logoGrabGreen}
                className="mr-3 h-6 sm:h-9"
                alt="Flowbite Logo"
              />
            </a>
            <FormHeaderSearch />
          </div>
          <div className="flex items-center lg:order-2">
            <a
              href="#"
              className="mr-2 rounded bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:outline-none focus:ring-4 focus:ring-gray-300 lg:px-5 lg:py-2.5 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              style={{ border: "1px solid #ccc" }}
            >
              Đăng nhập/Đăng kí
            </a>
            <a
              href="#"
              className="bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 mr-2 rounded bg-white px-4 py-2 text-sm font-medium text-gray-500 focus:outline-none focus:ring-4 lg:px-5 lg:py-2.5"
              style={{ border: "1px solid #ccc" }}
            >
              VI
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeaderWhite;
