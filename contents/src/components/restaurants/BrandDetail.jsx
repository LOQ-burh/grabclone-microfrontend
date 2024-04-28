// import { BrandLocal } from "../../utils/data/BrandLocal";
import starIcon from "../../assets/star-solid.svg";
import clockIcon from "../../assets/clock-regular.svg";
import tagPromos from "../../assets/icon-promo-tag.svg";
import OptionDelivery from "../../../../../../../../Users/Admin/Downloads/grabclone-ui/src/components/restaurants/OptionDelivery";
function Brand(props) {
  return (
    <div className="flex flex-wrap justify-center mb-10">
      <div className="w-full max-w-[1200px]">
        <div
          className="horizontal-scroll-item relative mb-4"
          style={{ width: "272px !important" }}
        >
          <h1 className="mt-3 text-sm font-bold lg:text-4xl">{props.name}</h1>
          <p className="mb-4 mt-4 text-[#707070] max-sm:mt-1 max-sm:text-sm">
            {props.category}
          </p>
          <div className="mb-4 mt-1 flex text-[#707070] max-sm:text-sm max-[400px]:text-[10px]">
            <div className="flex">
              <img width={23} className="max-sm:w-[18px]" src={starIcon}></img>
              &nbsp;&nbsp;
              <span>{props.rate}</span>
            </div>
            &nbsp;&nbsp;&nbsp;
            <div className="flex">
              <img
                className="opacity-50 max-sm:w-[18px]"
                src={clockIcon}
                style={{ width: "16px" }}
              ></img>
              &nbsp;&nbsp;
              <span>{props.time}</span>
            </div>
            &nbsp;&nbsp;&nbsp;
            <span> {props.location}</span>
          </div>
          <div className="flex justify-start max-sm:text-sm max-[400px]:text-[12px]">
            <img className="max-sm:w-[18px]" src={tagPromos}></img>
            &nbsp;
            <span>{props.promostion}</span>
          </div>
        </div>
        <OptionDelivery />
      </div>
    </div>
  );
}

export default Brand;
