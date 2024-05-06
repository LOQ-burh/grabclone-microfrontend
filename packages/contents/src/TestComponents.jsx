import BreadCrumbPromos from "./components/promos/BreadCrumb";

import DetailInfoRestaurant from "./components/restaurants/DetailInfoRestaurant";
function TestComponents() {
    return ( 
        <div className="w-full">
            <h1 className="my-40 text-3xl" style={{ textAlign: 'center' }}>Components from Home page</h1>
            <BreadCrumbPromos />
            <div className="w-full my-10" style={{ border: '1px solid #ccc'}}></div>

            <h1 className="my-40 text-3xl" style={{ textAlign: 'center' }}>Components from Promos page</h1>
            <DetailInfoRestaurant />
            <div className="w-full my-10" style={{ border: '1px solid #ccc'}}></div>
        </div>
     );
}
export default TestComponents;