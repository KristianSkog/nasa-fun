import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  const [dataResponse, setDataResponse] = useState('');

  const fetchData = async () => {
    const data = await fetch("https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DEMO_KEY");
    const response = await data.json()

    const parsedArray = response.near_earth_objects.map((item) => [item.absolute_magnitude_h, item.name])

    setDataResponse(parsedArray)
  }

  console.log(dataResponse)


  return (
    <div className="App">
      <header className="App-header">
        {
          dataResponse && dataResponse.map((item) => {
            return (<><h1>{item[0]}</h1>
              <p>{item[1]}</p> </>)
          })
        }
        {/* {dataResponse.map((item)=>{
          console.log(item)
        })} */}
        <button onClick={fetchData}>click me</button>
      </header>
    </div>
  );
}

export default App;
