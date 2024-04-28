import ArrowRight from '../../assets/chevron-right-solid.svg';

function BreadCrumb() {
  return (
    <div className="flex text-[17px] items-center">
        <span className="cursor-pointer">
          <a className="text-cyan-500" href="/">Trang chủ</a>
        </span>
        <span className="opacity-50 mx-2">
          <img className='w-3' src={ArrowRight} />
        </span>
        <span className="cursor-pointer">
          <a className="text-cyan-500" href="/promostion">Ẩm thực</a>
        </span>
        <span className="opacity-50 mx-2">
            <img className='w-3' src={ArrowRight} />
        </span>
        <span className="">
          <span>Khuyến mãi</span>
        </span>
    </div>
  );
}

export default BreadCrumb;
