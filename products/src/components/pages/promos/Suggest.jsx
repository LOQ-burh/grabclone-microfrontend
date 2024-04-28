import SuggestImg from "../../assets/images/placeholder-restaurant-2by1.jpg";
import SearchIcon from "../../assets/searchengin.svg";

function Suggest() {
  return (
    <div className="mt-20" style={{ width: 1200 }}>
      <div className="mb-5 flex h-fit  w-full rounded-e-full rounded-s-full bg-[#F7F7F7] p-2">
        <img
          className="ml-5 h-[18px] w-[18px]"
          src={SearchIcon}
        ></img>
        <input
          placeholder="Tìm món ăn hoặc quán ăn"
          className="ml-2 h-5 w-full bg-[#F7F7F7] text-sm text-[#676767] outline-none"
        ></input>
      </div>

      <div 
      className="relative flex justify-start items-center rounded-md hover:border-[2.5px] cursor-pointer"
      style={{ borderColor: '#fff !important'}}>
            <img 
            className="backdrop-grayscale rounded-md w-[170px] h-[100px]" 
            src={SuggestImg}
            style={{ filter: 'brightness(0.5)' }}/>
            <div className="color absolute text-white" style={{transform: 'translateX(100%)'}}>
                <h6>Gần tôi</h6>
            </div>
        </div>
    </div>
  );
}

export default Suggest;
