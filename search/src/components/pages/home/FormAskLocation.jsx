import locationIcon from '../../../assets/icons/location-crosshairs-solid.svg';
import chooseLocationIcon from '../../../assets/icons/location-dot-solid-red.svg';

function FormAskLocation() {
    return ( 
        <div className=" p-5 bg-white absolute top-28 md:max-w-[355px] w-full rounded-lg border-border-color border-[1px]" >
            <h3 className="font-bold mt-5 text-2xl">
                Good Morning 
            </h3>
            <h1 className="font-bold lg:text-4xl text-2xl">
                Where should we deliver your food today?
            </h1>
            <div className='flex h-fit w-full border-[1px] p-3 rounded-md hover:border-green-grab border-border-color mt-4'>
               <a href=''> <img className='md:w-6 w-5 h-5' src={locationIcon}></img></a>
                <input className="w-full outline-0 pl-2 pr-2" type='text' value='Trường Tiểu Học Võ Văn Tần, KP. 5, P.Trung Mỹ Tây, Q.12, Hồ Chí Minh, 70000, Vietnam'></input>
                <a href=''><img className='md:w-6 w-5 h-5' src={chooseLocationIcon}></img></a>
            </div>
            <button className="mb-10 bg-green-500 w-full p-3 font-bold text-white rounded-md mt-6">Tìm kiếm</button>
        </div>
     );
}

export default FormAskLocation;