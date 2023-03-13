

function SearchInputs({searchBy,SearchDataBy,SetnameOfCity,SetlatOfCity,SetlongOfCity,SetIDofCity}){
    return(
        <div className="searchInputs">
            {
                searchBy==="cityOption" ?
                    <div className="enterCity"><input onChange={(e)=>SetnameOfCity(e.target.value)} placeholder="Enter city" type="text"/></div> :
                    searchBy==="Lat&lon" ?
                        <div className="enterLatLon">
                            <input onChange={(e)=>SetlatOfCity(e.target.value)} placeholder="Enter Lattitude" className="lattitude" type="text"/>
                            <input onChange={(e)=>SetlongOfCity(e.target.value)} placeholder="Enter Longtitude" className="lontitude" type="text"/>
                        </div>
                        :
                        <div className="enterCityID"><input onChange={(e)=>SetIDofCity(e.target.value)} placeholder="Enter city code" type="text"/></div>
            }
            <div className="choseFor">Axtarışı
                <select onChange={(e)=>SearchDataBy(e)} name="ForWhat" id="">
                    <option value="cityOption">Şəhər</option>
                    <option value="Lat&lon">Lattitude & Longtitude</option>
                    <option value="cityID">Şəhər ID</option>
                </select>
                əsasında et
            </div>
        </div>
    )
}

export default SearchInputs;