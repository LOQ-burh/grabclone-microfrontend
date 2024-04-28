import FbIcon from '../../assets/square-twitter.svg';
import logoGrabWhite from "../../assets/logo-grabfood-white2.svg";
import logoAppStore from '../../assets/logo-appstore.svg';
import logoPlayStore from '../../assets/logo-playstore.svg';

function Footer() {
  return (
    <div className="flex justify-center bg-green-500">
      <div className="w-[1200px]">
        <div>
          <img
            className="m-5 w-40"
            src={logoGrabWhite} />
          <hr className="m-5 border-[#15d66c]"></hr>
          <div className="grid grid-cols-1 text-sm font-bold text-white md:grid-cols-4 lg:grid-cols-4">
            <ul>
              <a>
                <li className="m-5 mb-0">Về GrabFood</li>
              </a>
              <a>
                <li className="m-5 mb-0">Về Grab</li>
              </a>
              <a>
                <li className="m-5 mb-0">Blog</li>
              </a>
            </ul>
            <ul>
              <a>
                <li className="m-5 mb-0">Mở quán trên GrabFood</li>
              </a>
              <a>
                <li className="m-5 mb-0">Trở thành tài xế Grab</li>
              </a>
            </ul>
            <ul>
              <a>
                <li className="m-5 mb-0">Trung tâm hỗ trợ</li>
              </a>
              <a>
                <li className="m-5 mb-0">Câu hỏi thường gặp</li>
              </a>
            </ul>
            <div className="flex ">
              <a href="">
                <img
                  width={20}
                  className="m-5 mb-0"
                  src={FbIcon}
                ></img>
              </a>
              <a href="">
                <img
                  width={20}
                  className="m-5 mb-0"
                  src={FbIcon}
                ></img>
              </a>
              <a href="">
                <img
                  width={20}
                  className="m-5 mb-0"
                  src={FbIcon}
                ></img>
              </a>
            </div>
          </div>
          <hr className="m-5 mb-0  border-[#15d66c]"></hr>
          <div className="mb-2 grid grid-cols-1 p-4 lg:grid-cols-3">
            <div className="mb-3 mt-4 flex gap-6">
              <a>
                <img src={logoAppStore}></img>
              </a>
              <a>
                <img src={logoPlayStore}></img>
              </a>
            </div>
            <div className="w-full"></div>
            <div className="mb-3 flex items-center gap-5 text-[12px] text-white">
              <span>© 2024 Grab</span>
              <span>Câu hỏi thường gặp</span>
              <span>Chính sách bảo mật</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
