import convert from 'convert-units';
import {SNOW,WINDY,SUN,RAIN,CLOUD,CLOUDY,} from './../Constants/wheaters';




const getTemp=Kelvin=>{
    return  Number(convert(Kelvin).from("K").to("C").toFixed(2)) ;
   }
 const  getWheatherState = wheather_data=>{
       return SUN;
   }


   const transformWheather = wheather_data => {

       const { humidity,temp } = wheather_data.list[0].main;
       const {speed} = wheather_data.list[0].wind;
       const wheatherState =  getWheatherState(wheather_data);
       const temperature = getTemp(temp);

       const data={
           humidity,
           temperature,
           wheatherState,
           wind:`${speed} m/s`,
       }
       return data;

   }
   export default transformWheather;