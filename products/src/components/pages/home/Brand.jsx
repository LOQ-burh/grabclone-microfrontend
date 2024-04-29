import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrandLocal } from "../../../utils/data/BrandLocal";
import starIcon from "../../../assets/icons/star-solid.svg";
import clockIcon from "../../../assets/icons/clock-regular.svg";
import tagPromos from "../../../assets/icons/icon-promo-tag.svg";
import 'tailwindcss/tailwind.css';
function Brand() {
  const configSlider = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="flex justify-center flex-wrap">
      <div className="max-w-[1200px] w-full">
        <a className="" href="/restaurant">
          <Slider className="" {...configSlider}>
            {BrandLocal.map((d) => (
              <div key={d.name} className="relative mx-2 " style={{ width: '272px !important' }}>
                <div className="absolute px-2 bg-green-500 p-[3px] text-xs text-white font-semibold rounded-sm mt-4">
                    Promo
                </div>
                <img className="rounded-md max-sm:w-[215px]" src={d.image}></img>
                <h1 className="font-bold text-sm lg:text-xl mt-3">{d.name}</h1>
                <p className="max-sm:text-sm max-sm:mt-1 text-[#707070] mt-4">{d.category}</p>
                <div className="flex max-sm:text-sm max-[400px]:text-[10px] text-[#707070] mt-1">
                    <div className="flex">
                        <img width={23} className="max-sm:w-[18px]" src={starIcon}></img>
                        &nbsp;&nbsp;
                        <span>{d.rate}</span>
                    </div>
                    &nbsp;&nbsp;&nbsp;
                    <div className="flex">
                        <img className="max-sm:w-[18px] opacity-50" src={clockIcon} style={{width : '16px'}}/>
                        &nbsp;&nbsp;
                        <span>{d.time}</span>
                    </div>
                    &nbsp;&nbsp;&nbsp;
                    <span> {d.location}</span>
                </div>
                <div className="flex max-sm:text-sm justify-center max-[400px]:text-[12px]">
                    <img className="max-sm:w-[18px]" src={tagPromos}></img>
                    &nbsp;
                    <span>{d.promostion}</span>
                </div>
              </div>
            ))}
          </Slider>
        </a>
      </div>
      <div style={{ width: 1200 }}>
        <div className="flex justify-center p-4 ">
          <div className="w-full">
            <a href="/promostion">
              <div className=" hover:border-green-500 hover:text-green-500 mb-3 mt-3 w-full rounded-md border-[1px] border-[#676767] p-3 text-center font-bold text-[#676767]">
                See all promotions
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Brand;
