import './App.css';
import { ComposableMap, Geographies, Geography } from "react-simple-maps"

const geoUrl =  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json"


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ComposableMap>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography 
                  key={geo.rsmKey} 
                  geography={geo}
                  fill={ColorCountry(geo.properties["Alpha-2"])} 
                  stroke="#000000" 
                />
              ))
            }
          </Geographies>
        </ComposableMap>
      </header>
    </div>
  );
}

function ColorCountry(country_name){
  return country_name === "GB" ? "#0000FF" : "#999999"
}

export default App;
