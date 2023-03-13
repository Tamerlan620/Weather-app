import axios from "axios";
import {useEffect, useState} from "react";
import './WheatherStyle.css';
import CurrentWeatherData from './CurrentWeatherData';
import ToggleData from './ToggleData';
import SearchInputs from "./SearchInputs";


function App() {
const [searchBy,SetSearchBy] = useState('cityOption');
const [toggle,SetToggle] = useState(null);
const [dayOfManth,SetDayOfManth] = useState('');
const [month,SetMonth] = useState(["January","February","March","April","May","June","July","August","September","October","November","December"]);
const [monthofYear,SetMonthOfYear] = useState('')
const [nameOfCity,SetnameOfCity] = useState('')
const [latOfCity,SetlatOfCity] = useState(null)
const [longOfCity,SetlongOfCity] = useState(null)
const [IDofCity,SetIDofCity] = useState(null)
const [allData,SetallData] = useState(null)
const [iconOpenweather,SeticonOpenweather] = useState(["01d","02d","03d","04d","09d","10d","11d","13d","50d","01n","02n","03n","04n","09n","10n","11n","13n","50n"])
const [iconCloudflare,SetCloudflare] = useState(["wi-day-sunny","wi-day-sunny-overcast","wi-day-cloudy-high","wi-day-cloudy","wi-day-showers","wi-day-rain","wi-day-thunderstorm","wi-day-snow","wi-day-fog","wi-day-sunny","wi-day-sunny-overcast","wi-day-cloudy-high","wi-day-cloudy","wi-day-showers","wi-day-rain","wi-day-thunderstorm","wi-day-snow","wi-day-fog"])

useEffect(()=>{
    const currentTime = new Date();
    const currentData = currentTime.getDate();
    const currentMonth =month[currentTime.getMonth()];
    const currentdate = currentTime.getDay()

    SetDayOfManth(currentData);
    SetMonthOfYear(currentMonth)
},[])

const SearchDataBy = (e)=>{
    const SetSearchData = e.target.value;
    SetSearchBy(SetSearchData);
}

const GetDataOnClick = async ()=>{
    const key = process.env.REACT_APP_WEATHER_DATA;
    let url = '';
    if(searchBy==="cityOption"){
       url = `https://api.openweathermap.org/data/2.5/forecast?q=${nameOfCity}&lang=az&units=metric&appid=${key}`;
   }else if(searchBy==="Lat&lon"){
       url = `https://api.openweathermap.org/data/2.5/forecast?lat=${latOfCity}&lon=${longOfCity}&lang=az&units=metric&cnt=5&appid=${key}`
   }else{
       url = `https://api.openweathermap.org/data/2.5/forecast?id=${IDofCity}&lang=az&units=metric&cnt=5&appid=${key}`
   }

   try {
       const {data} = await axios.get(url)
       SetallData(data)
   }catch {
       alert("Error var")
   }
}

  return (
    <div className="App">
        <div className="maindiv">
            <SearchInputs SetIDofCity={SetIDofCity} SetnameOfCity={SetnameOfCity} searchBy={searchBy} SearchDataBy={SearchDataBy} SetlongOfCity={SetlongOfCity} SetlatOfCity={SetlatOfCity} />
            <div className="getData"><button onClick={GetDataOnClick}>Axtar</button></div>
            { allData &&
                <>
                    <CurrentWeatherData iconOpenweather={iconOpenweather} iconCloudflare={iconCloudflare} allData={allData} dayOfManth={dayOfManth} monthofYear={monthofYear} />
                    <div className="toggledata">
                         <ToggleData SetToggle={SetToggle} toggle={toggle}  allData={allData}/>
                    </div>
                </>
            }
        </div>
    </div>
  );
}

export default App;
