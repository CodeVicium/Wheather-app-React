import convert from 'convert-units';
import {SNOW,SUN,RAIN,CLOUD,THUNDER,DRIZZLE} from './../Constants/wheaters';




const getTemp=Kelvin=>{
    return  Number(convert(Kelvin).from("K").to("C").toFixed(2)) ;
   }
//  const  getWheatherState = wheather_data=>{
//        return SUN;
//    }
const getWeatherState= wheather => {
    const{id}=wheather;
    if(id<300){
        return THUNDER;
    }else if(id<400){
        return DRIZZLE;
    }else if(id<600){
        return RAIN;
    }else if(id<700){
        return SNOW;
    }else if(id===800){
        return SUN;
    }else {
        return CLOUD;
    }

}

   const transformWeather = weather_data => {

       const { humidity,temp } = weather_data.list[0].main;
       const {speed} = weather_data.list[0].wind;
     
       const wheatherState =  getWeatherState(weather_data.list[0].weather[0]);
       const temperature = getTemp(temp);

       const data={
           humidity,
           temperature,
           wheatherState,
           wind:`${speed} m/s`,
       }
       return data;

   }
   export default transformWeather;