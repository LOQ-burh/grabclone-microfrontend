// import chooseLocationIcon from '../../assets/location-dot-solid-red.svg';
import chooseLocationIcon from '../../assets/icons/location-dot-solid-red.svg';

function FormHeaderSearch() {
    return ( 
        <div className="flex items-center max-sm:hidden mr-auto border-[1px] w-max-[360px] h-max[20px] border-[#ccc] p-[10px] rounded-s-md rounded-e-md">
                <span className="pl-4 pr-2 text-[12px] text-[#6C6767]">Giao đến</span>
                <img className="w-5 h-5" src={chooseLocationIcon}></img>
                <span className="pl-2 text-[12px]">Trường Tiểu Học Võ Văn Tần, ...</span>
            </div>
     );
}

export default FormHeaderSearch;    