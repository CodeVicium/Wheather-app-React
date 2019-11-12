import React, {Component} from 'react';
import Location from './Location';
import WheatherData from './WeatherData';
import {SNOW,WINDY,SUN,RAIN,CLOUD,CLOUDY,} from '../../Constants/wheaters';
import transformWheather from '../../Services/transformWheather'
import {api_wheather} from '../../Constants/api_url';
import './style.css';   








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
   

    handleUpdateClick=()=>{
        fetch(api_wheather).then(resolve=>{
            //  console.log(resolve);
            //  debugger;
            return resolve.json(); 
        }).then(data =>{

             const newWeather = transformWheather(data);
            //  console.log(newWeather);
            //  debugger;
             this.setState({data:newWeather});
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
    <Location  city={city}></Location>
    <WheatherData data={data} ></WheatherData>
    <button class="btn btn-outline-success" onClick={this.handleUpdateClick}>
            Actualizar 
    </button>
</div>);
}
};

    

export default WheatherLocation;