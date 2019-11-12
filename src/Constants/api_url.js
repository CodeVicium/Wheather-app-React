
const location = "Cordoba ,ar";

const api_key = "ac17291dab98d4865910f10a80f2b8d1";
const url_base_wheather = "http://api.openweathermap.org/data/2.5/forecast";

 export const api_wheather = `${url_base_wheather}?q=${location}&appid=${api_key}`;
