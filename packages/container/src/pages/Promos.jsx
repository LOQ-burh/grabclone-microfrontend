// Container
import HeaderWhite from '../components/HeaderWhite';
import Footer from '../components/Footer';

// Products
import Suggest from 'products/SuggestProducts';
import BrandProducts from 'products/BrandPromosProducts';

// Contents
import BreadCrumbPromos from 'contents/BreadCrumbPromosContents';

function Promos() {
    return ( 
        <div>
            <HeaderWhite />
            <div className='flex justify-center flex-wrap'>
                <Suggest />
                <div className='w-full h-1.5 bg-slate-100 mt-4'></div>
                <div className='mt-20' style={{ width: 1200 }}>
                    <BreadCrumbPromos />
                    <h1 className="p-4 text-4xl font-bold max-sm:text-sm">Ưu đãi ở <span className="text-green-500">Trường Tiểu Học Võ Văn Tần, KP. 5, P.Trung Mỹ Tây, Q.12, </span>...</h1>
                </div>
                <div className='mt-20' style={{ width: 1200 }}>
                    <BrandProducts />
                </div>
            </div>
            <Footer />
        </div>
     );
}

export default Promos;