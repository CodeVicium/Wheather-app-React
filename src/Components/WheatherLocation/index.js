import React, {Component} from 'react';
import CircularProgress from '@material-ui/core/CircularProgress'
import Location from './Location';
import WheatherData from './WeatherData';
import {SNOW,WINDY,SUN,RAIN,CLOUD,CLOUDY,} from '../../Constants/wheaters';
import transformWheather from '../../Services/transformWheather'
import {api_wheather} from '../../Constants/api_url';
import './style.css';   




class WheatherLocation extends Component{

    constructor() {
        super();
        this.state={
            city:'Cordoba', 
            data:null,
        };
    }
   componentDidMount() {
  
       this.handleUpdateClick();
   }
   
   componentDidUpdate(prevProps, prevState) {
    
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
    { data? 
      <WheatherData data={data} ></WheatherData>: <CircularProgress size={50}/>
        
     }
    
</div>);
}
};

    

export default WheatherLocation;