import React from 'react';
import WheatherLocation from './WheatherLocation';
import PropTypes from 'prop-types';

const strToComponents = cities => (
    cities.map(city => <WheatherLocation city={city}></WheatherLocation>)
);
const LocationList = ({cities})=> ( 
        <div>
             { strToComponents(cities) }
        </div>
);



LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
}
export default LocationList;
