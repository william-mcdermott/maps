/// <reference types="@types/google.maps" />
import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';

const initMap = () => {
    new CustomMap('map');
};

(window as any).initMap = initMap