import React from 'react';
import WheatherIcons from 'react-weathericons';
import {SNOW,WINDY,SUN,RAIN,CLOUD,CLOUDY,} from '../../../Constants/wheaters'; 
import PropTypes from 'prop-types';
import './styles.css';

const icons={
    [SUN] :"day-sunny",
    [CLOUD]:"cloud",
    [CLOUDY]:"cloudy",
    [RAIN]:"rain",
    [SNOW]:"snow",
    [WINDY]:"windy"
};
const getWheatherIcon = (wheatherState)=>{
    const icon = icons[wheatherState];
    const sizeIcon= "4x";
    if (icon) {
       return <WheatherIcons className="wicon" name={icon} size={sizeIcon}></WheatherIcons>
    } else return <WheatherIcons name={"day-sunny"} size={sizeIcon}></WheatherIcons>
    
};


const WheatherTemperature =({temperature,wheatherState})=>(
    <div className="wheatherTemperatureCont">
       {
           getWheatherIcon(wheatherState)
       }
        <span className="temperature">{ `${temperature} ` } </span>
        <span className="temperatureType"> C°</span> 
    </div>
);

WheatherTemperature.propTypes={
temperature: PropTypes.number.isRequired,
wheatherState:PropTypes.string.isRequired,
};


export default WheatherTemperature;