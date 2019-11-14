import React from 'react';
import WheatherLocation from './WheatherLocation';
import PropTypes from 'prop-types';
const LocationList = ({ cities,onSelectedLocation }) => {
    const handlewheatherLocationClick = city=>{
        console.log("handlewheatherLocationClick");
        onSelectedLocation(city);
    } ;
  
    const strToComponents = cities => (
        cities.map(city => (
            <WheatherLocation
                key={city}
                city={city}
                onWheatherLocationClick={() => handlewheatherLocationClick(city)}
            >

            </WheatherLocation>))
    );

    return (
        <div>
            {strToComponents(cities)}
        </div>

    )
};



LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
    onSelectedLocation:PropTypes.func,
}
export default LocationList;
