import BrandHome from "./components/pages/home/Brand";
import TagsHome from "./components/pages/home/Tags";

import BrandPromos from "./components/pages/promos/Brand";
import SuggestPromos from "./components/pages/promos/Suggest";
function TestComponent() {
    return ( 
        <div className="w-full">
            <h1 className="my-40 text-3xl" style={{ textAlign: 'center' }}>Components from Home page</h1>
            <BrandHome />
            <div className="w-full my-10" style={{ border: '1px solid #ccc'}}></div>
            <TagsHome />
            <div className="w-full my-10" style={{ border: '1px solid #ccc'}}></div>
            <h1 className="my-40 text-3xl" style={{ textAlign: 'center' }}>Components from Promos page</h1>
            <BrandPromos />
            <div className="w-full my-10" style={{ border: '1px solid #ccc'}}></div>
            <SuggestPromos />
            <div className="w-full my-10" style={{ border: '1px solid #ccc'}}></div>
            <h1 className="my-40 text-3xl" style={{ textAlign: 'center' }}>Components ItemProducts from Restaurant page: Need to be exported to the micro: container</h1>
        </div>
     );
}
export default TestComponent;