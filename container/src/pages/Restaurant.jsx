import React, { useState } from "react";
import {
  Typography,
} from "@material-tailwind/react";
import { BrandLocal } from "../utils/data/BrandLocal";
import FoodImg from '../assets/images/com-ga-goc-tu.webp';

// Container
import HeaderWhite from "../components/layouts/HeaderWhite";
import Footer from "../components/layouts/Footer";

// Contents
import DetailInfoRestaurant from "../components/restaurants/DetailInfoRestaurant";

// Products
import ItemProducts from "../components/restaurants/ItemProducts";

function Restaurant() {
  //state close menu
  const [openRight, setOpenRight] = React.useState(true);

  const openDrawerRight = () => setOpenRight(true);
  const closeDrawerRight = () => setOpenRight(false);
  return (
    <div>
      <HeaderWhite />
      <div className="flex flex-wrap justify-center">
        <DetailInfoRestaurant />

        <div
          className=" flex w-full flex-wrap justify-center py-10"
          style={{ backgroundColor: "#f7f7f7" }}
        >
          {/* Products components */}
          <div id="" style={{ width: 1200 }}>
            {BrandLocal[0].menu.map((itemMenu, indexMenu) => (
              <div name={itemMenu.navProduct} key={itemMenu.id}>
                <h1 className="p-4 text-3xl font-bold">
                  {itemMenu.navProduct}
                </h1>
                <div
                  key={indexMenu}
                  className="grid w-full grid-cols-1 gap-5 p-4 lg:w-[1200px] lg:grid-cols-3"
                >
                  {itemMenu.itemProduct.map((itemProduct) => (
                    <div
                    onClick ={() => setOpenRight(!openRight) }
                      key={itemMenu.itemProduct.idProduct}
                    >
                      <ItemProducts {...itemProduct}></ItemProducts>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          {/* ==================== */}
          <div onClick ={() => setOpenRight(!openRight)} className={!openRight ? 'bg-black/80 w-full h-screen z-10 fixed top-0': undefined}></div>
          <div className="mt-20 flex justify-end" style={{ width: 1200, zIndex:20  }} >
            <React.Fragment>
              <div  
                open={openRight}
                className="fixed z-[9999] pointer-events-auto bg-white box-border w-full shadow-2xl shadow-blue-gray-900/10 top-0 right-0 !max-w-[400px]" 
                style={{ maxWidth: "300px", maxHeight: "100%", height: "100vh", transform: openRight ? "translateX(400px) translateY(0px) translateZ(0px)" : "none"}}>
                <div className="flex items-center justify-between p-4">
                  <Typography variant="h5" color="blue-gray">
                    Material Tailwind
                  </Typography>
                  <div className=" fixed w-full bg-white p-2 m-[1px]">
                    <button onClick ={() => setOpenRight(!openRight)}><img className="w-[20px]" src="https://static.thenounproject.com/png/53235-200.png"></img></button>
                  </div>
                </div>

                <div className="bg-white p-5 flex">
                    <div>
                        <img className="w-[100px] rounded-md" src={FoodImg} />
                    </div>
                    <div className="pl-4 w-[300px]">
                        <h1 className="font-bold text-2xl">Combo Anh 3 - BigChicken</h1>
                        <p className="text-[14px] text-gray-500">Làm việc bận rộn, cứ để đó chúng tôi lo ăn thả ga không lo về giá</p>
                    </div>
                    <div className="font-bold text-xl">59.000</div>
                </div>

                <div className="w-full h-1 mb-5 bg-gray-200"></div>

                <Typography color="gray" className="pr-4 font-normal p-4">
                  CƠM GÀ ANH XEM CẢM ƠN QUÝ KHÁCH ĐÃ LỰA CHỌN
                </Typography>
                <div className="w-full">
                  <label className="p-4 flex">
                      <input type="checkbox" className="accent-green-900 w-[25px] h-[25px] "   />
                      <div className="flex items-center justify-between w-full pl-4 text-text">
                          <div>Mọi vấn đề Đơn xin Gọi Quán 0906660378</div>
                      </div>
                  </label>
                </div>
                <div className="bg-white max-sm:w-full w-[340px] p-5 items-center justify-between fixed bottom-0 flex">
                    <div>
                        <img src="https://food.grab.com/static/images/icons/icon-minus-bordered.svg"></img>
                    </div>
                    <div className="flex justify-center items-center text-[20px] font-weight[3px] mx-3">1</div>
                    <div>
                        <img src="https://food.grab.com/static/images/icons/icon-plus-bordered.svg"></img>
                    </div>
                    <button className="ml-6 max-sm:w-[250px] w-[300px] bg-green-500  font-bold text-white rounded-md text-[12px] p-2">Add to Basket - 10.000đ</button>
                </div>
              </div>
            </React.Fragment>
          </div>

          <div className="mt-20 flex justify-center" style={{ width: 1200 }}>
            <h4 className="">
              Chúng tôi luôn cố gắng cập nhật thông tin chính xác nhất.{" "}
              <a href="/" className="text-sky-500">
                Hãy báo với chúng tôi
              </a>{" "}
              nếu bạn thấy bất kỳ thông tin không chính xác nào.
            </h4>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Restaurant;
