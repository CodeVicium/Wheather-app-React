import React from 'react';
import './App.css';
import LocationList from './Components/LocationList'
const cities = [
 'Buenos Aires,ar',
 'Bogota,col',
 'Washington,us',
 'Madrid,es',
 'Lima,pe'
];
function App() {
  return (
    <div className="App">
      <header className="App-header">
    
        <LocationList cities={cities} />
        
      </header>
    </div>
  );
}

export default App;
