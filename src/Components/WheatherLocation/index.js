import React, {Component} from 'react';
import CircularProgress from '@material-ui/core/CircularProgress'
import {PropTypes} from 'prop-types';
import getUrlWheatherByCity from '../../Services/getUrlWheatherByCity'
import Location from './Location';
import WheatherData from './WeatherData';
import transformWeather from '../../Services/transformWheather'
import './style.css';   




class WheatherLocation extends Component{

    constructor(props) {
        super(props);
        const {city} = props 
        this.state={
            city, 
            data:null,
        };
    }
   componentDidMount() {
  
       this.handleUpdateClick();
   }
   
   componentDidUpdate(prevProps, prevState) {
    
   }

   
   
   

    handleUpdateClick=()=>{
        const api_wheather = getUrlWheatherByCity(this.state.city)
        fetch(api_wheather).then(resolve=>{
            //  console.log(resolve);
            //  debugger;
            return resolve.json(); 
        }).then(data =>{
            
             const newWeather = transformWeather(data);

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

    WheatherLocation.propTypes = {
        city: PropTypes.string.isRequired,
    }
export default WheatherLocation;