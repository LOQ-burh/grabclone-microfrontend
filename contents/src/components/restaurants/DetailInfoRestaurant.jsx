import { BrandLocal } from '../../../../../../../../Users/Admin/Downloads/grabclone-ui/src/utils/data/BrandLocal';
import BreadCrumb from './BreadCrumb';
import BrandDetail from './BrandDetail';
import NavContent from './NavContent';
function DetailInfoRestaurant() {
    return ( 
        <div className="mt-24" style={{ width: 1200 }}>
            <BreadCrumb />
            <BrandDetail {...BrandLocal[0]}/>
            <NavContent />
        </div>
     );
}

export default DetailInfoRestaurant;