import {api_key,url_base_wheather} from '../Constants/api_url';

const getUrlWheatherByCity=city=>{
    return  `${url_base_wheather}?q=${city}&appid=${api_key}`;
}
export default getUrlWheatherByCity;