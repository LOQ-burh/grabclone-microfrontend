import locationIcon from "../../../assets/icons/location-crosshairs-solid.svg";
import chooseLocationIcon from "../../../assets/icons/location-dot-solid-red.svg";
import 'tailwindcss/tailwind.css';

function FormAskLocation() {
    return (
        <div
            className="absolute top-28 w-full rounded-lg border-[1px] bg-white p-5 md:max-w-[355px] "
            style={{ maxWidth: '355px', top: '7rem' , borderRadius: '0.5rem' }}
        >
            <h3 className="mt-5 text-2xl font-bold" style={{ marginTop: '1.25rem'}}>Good Morning</h3>
            <h1 className="text-2xl font-bold lg:text-4xl">
                Where should we deliver your food today?
            </h1>
            <div className="hover:border-green-grab border-border-color mt-4 flex h-fit w-full rounded-md border-[1px] p-3">
                <a href="">
                    {" "}
                    <img className="h-5 w-5 md:w-6" src={locationIcon}></img>
                </a>
                <input
                    className="w-full pl-2 pr-2 outline-0"
                    type="text"
                    value="Trường Tiểu Học Võ Văn Tần, KP. 5, P.Trung Mỹ Tây, Q.12, Hồ Chí Minh, 70000, Vietnam"
                ></input>
                <a href="">
                    <img
                        className="h-5 w-5 md:w-6"
                        src={chooseLocationIcon}
                    ></img>
                </a>
            </div>
            <button className="mb-10 mt-6 w-full rounded-md bg-green-500 p-3 font-bold text-white">
                Tìm kiếm
            </button>
        </div>
    );
}

export default FormAskLocation;
