import React from 'react';
import PropTypes from 'prop-types';
import WheatherExtraInfo from './WheatherExtraInfo';
import WheatherTemperature from './WheatherTemperature';
import {SNOW,WINDY,SUN,RAIN,CLOUD,CLOUDY,} from '../../../Constants/wheaters';
import './styles.css';


const WheatherData =({data:{temperature,wheatherState,humidity,wind }})=>(  
    <div className="wheatherDataCont">
        <WheatherTemperature temperature={temperature} wheatherState={wheatherState}  />
        <WheatherExtraInfo humidity= {humidity} wind= {wind}  />
    </div>
);

WheatherData.propTypes={
    data: PropTypes.shape({
        temperature:PropTypes.number.isRequired,
        wheatherState:PropTypes.string.isRequired,
        humidity:PropTypes.number.isRequired,
        wind:PropTypes.string.isRequired,
    }),
};

export default WheatherData ;
 