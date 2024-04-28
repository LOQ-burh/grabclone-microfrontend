import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NavFood } from "../../../../../../../../Users/Admin/Downloads/grabclone-ui/src/utils/data/NavFood";


function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "#9ca3af" , padding: "1px 0px"}}
        onClick={onClick}
      />
    );
  }
  
  function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "#9ca3af", padding: "1px 0px"}}
        onClick={onClick}
      />
    );
  }

function NavContent() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };
  return (
    <div className="m-auto w-full">
      <div className="mt-20">
        <Slider {...settings}>
          {NavFood.map((d) => (
            <div
              key={d.name}
              className="h-[45px] rounded-xl bg-white text-black"
            >
              <div className="flex flex-col items-center justify-center gap-4 p-4 cursor-pointer">
                <p className="text-base font-semibold text-gray-400"><a href="#">{d.name}</a></p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default NavContent;
