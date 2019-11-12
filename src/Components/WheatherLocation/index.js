import React, {Component} from 'react';
import Location from './Location';
import WheatherData from './WeatherData';
import {SNOW,WINDY,SUN,RAIN,CLOUD,CLOUDY,} from '../../Constants/wheaters';
import './style.css';

const location = "Buenos Aires,ar";
const api_key = "ac17291dab98d4865910f10a80f2b8d1";
const url_base_wheather = "http://api.openweathermap.org/data/2.5/forecast";

 const api_wheather = `${url_base_wheather}?q=${location}&appid=${api_key}`;






const data = {
    temperature:5,
    wheatherState:SUN,
    humidity:10,
    wind:'10 m/s'
};

// const data2 = {
//     temperature:15,
//     wheatherState:WINDY,
//     humidity:15,
//     wind:'15 m/s'
// };



class WheatherLocation extends Component{

    constructor() {
        super();
        this.state={
            city:'Cordoba', 
            data:data,
        };
    }

    getWheatherState = wheather_data=>{
        return SUN;
    }


    getData = wheather_data => {
        const {humidity,temp} = wheather_data.main;
        const {speed}=wheather_data.wind;
        const wheatherState = this.getWheatherState(wheather_data);

        const data={
            humidity,
            temperature: temp,
            wheatherState,
            wind:`${speed} m/s`,
        }
        return data;

    }

    handleUpdateClick=()=>{
        fetch(api_wheather).then(resolve=>{
            //  console.log(resolve);
            //  debugger;
            return resolve.json(); 
        }).then(data =>{

            // const newWeather = this.getData(data);
            // console.log(newWeather);
            // debugger;
            // this.setState({
            //     data:newWeather
            // });
             console.log(data);
             debugger;
        });

        // console.log("Actualizado");
        // this.setState({
        //     city:"Catamarca",
        //     data:data2,
        // });
    }

    render(){
        const {city,data}=this.state;
        return (<div className="wheatherLocationCont"> 
    <Location city={city}></Location>
    <WheatherData data={data} ></WheatherData>
    <button class="btn btn-outline-success" onClick={this.handleUpdateClick}>
            Actualizar 
    </button>
</div>);
}
};

    

export default WheatherLocation;