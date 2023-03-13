


function ToggleData({allData,SetToggle,toggle}) {
    const toggleFunction = (index)=>{
        if (toggle===index){
            return SetToggle(null)
        }
        SetToggle(index)
    }
    return(
        allData.list.map((days,index)=> {
            if(days.dt_txt.split(" ")[1] ==="12:00:00"){
                return(
                    <div key={index} onClick={() => toggleFunction(index)} className='FivedaysData'>{days.dt_txt.split(" ")[0].split("-").reverse().join("-")}
                        <div className={`${toggle === index ? "maindata1 active" : "maindata1"}`}>
                            <div className="temperature1">Temp:<span>{Math.floor(days.main.temp)} C°</span></div>
                            <div className="feelsLike1">Hissedilən <span>{Math.floor(days.main.feels_like)} C°</span></div>
                            <div className="main1">Hava <span>{days.weather[0].description}</span></div>
                            <div className="humidity1">Rütubət <span>{days.main.humidity}%</span></div>
                            <div className="speedofwind1">Küləyin sürəti <span>{days.wind.speed} m/s</span></div>
                            <div className="pressure1">Atm təzyiqi <span>{days.main.pressure} mm</span></div>
                        </div>
                    </div>

                ) }
        })
    )
}

export default ToggleData;