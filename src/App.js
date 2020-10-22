import React, { useState, useEffect } from 'react';
import './App.css';

import Earth from "./Earth"

function App() {
  const [dataResponse, setDataResponse] = useState('');

  const fetchData = async () => {
    const data = await fetch("https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DEMO_KEY");
    const response = await data.json()

    const parsedArray = response.near_earth_objects.map((item) => [item.name, item.absolute_magnitude_h])

    setDataResponse(parsedArray)
  }

  console.log(dataResponse)


  return (
    <div className="App">
      <header className="App-header">
        {
          dataResponse && dataResponse.map((item, index) => {
            return (
              <Earth key={index} item={item}></Earth>
            )
          })}
        <button onClick={fetchData}>click me</button>
      </header>
    </div>
  );
}

export default App;
