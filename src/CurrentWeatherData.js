

function CurrentWeatherData({monthofYear,dayOfManth,allData,iconCloudflare,iconOpenweather}) {
       return(
        <div className="data">
            <div className="widget">
                <div className="weatherIcon">
                    <i className={`wi ${iconCloudflare[iconOpenweather.findIndex(ind=>ind === allData.list[0].weather[0].icon)]}`}></i>
                    <div className="otherdata">
                        <span style={{color:"#3d3e42"}}>Küləyin sürəti:{allData.list[0].wind.speed}m/s</span>
                        <span style={{color:"#8c95af"}}>Atmosfer təzyiqi:{allData.list[0].main.pressure} mm</span>
                        <span style={{color:"#3f90ea"}}>Rütubət:{allData.list[0].main.humidity}%</span>
                    </div>
                </div>
                <div className="weatherData">
                    <h1 className="temperature">{Math.floor(allData.list[0].main.temp)}C°</h1>
                    <h2 className="description">{allData.list[0].weather[0].description}</h2>
                    <h3 className="city">{allData && allData.city.name} / {allData && allData.city.country}</h3>
                    <div className="feelsLike">Hiss edilən:{Math.floor(allData.list[0].main.feels_like)}C°</div>

                </div>
                <div className="date">
                    <h4 className="month" id="month">{monthofYear}</h4>
                    <h5 className="day" id="day">{dayOfManth}</h5>
                </div>
            </div>

        </div>
    )
}

export default CurrentWeatherData;