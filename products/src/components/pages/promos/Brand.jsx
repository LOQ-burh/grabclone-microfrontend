import { BrandLocal } from "../../utils/data/BrandLocal";
import starIcon from "../../assets/star-solid.svg"
import clockIcon from "../../assets/clock-regular.svg"
import tagPromos from "../../assets/icon-promo-tag.svg"

function Brand() {
    return ( 
        <a className="grid grid-cols-4 gap-4 mb-10" href="/restaurant">
            {BrandLocal.map((d) => (
              <div key={d.name} className="relative flex flex-col mb-10" style={{ width: '272px !important' }}>
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
                        <img className="max-sm:w-[18px] opacity-50" src={clockIcon} style={{width : '16px'}}></img>
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
        </a>
     );
}

export default Brand;