import PlusWhiteIcon from '../../../assets/icons/plus-solid-white.svg';
import 'tailwindcss/tailwind.css';
function ItemProducts(props) {
  return (
    <div className="lg:w-max-[383px] hover:border-green-grab w-full cursor-pointer rounded-[10px] bg-white p-5 pb-3 hover:border-[1px] ">
      <div className="flex">
        <img className="w-26 h-28" src={props.imageProduct}></img>
        <div className="w-full p-4 pb-0 pt-0">
          <div>
            <h1 className="h-auto">
              {props.nameProduct} 
            </h1>
            <p className="mt-2 text-[14px] text-[#707070]">
              {props.description}
            </p>
          </div>
          <div className="mt-5 flex justify-end">
            <p className="text-[16px] font-bold">{props.price}</p>
            <div className="bg-green-500 ml-auto flex  h-8 w-8 items-center justify-center rounded-full">
              <img className='w-4' src={PlusWhiteIcon}></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemProducts;
