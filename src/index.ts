/// <reference types="@types/google.maps" />
import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';

const user = new User();
const initMap = () => {
    const customMap = new CustomMap('map');
    customMap.addUserMarker(user);
};

(window as any).initMap = initMap