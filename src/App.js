import React, { Component } from 'react';
import {Grid,Row,Col} from 'react-flexbox-grid';
import './App.css';
import LocationList from './Components/LocationList'
const cities = [
  'Buenos Aires,ar',
  'Bogota,col',
  'Washington,us',
  'Madrid,es',
  'Lima,pe',
  'Cordoba,ar',
  'Alta Córdoba,ar'
];
class App extends Component {
  handleSelectedLocation = city => {
    console.log(`handleSelectedLocation ${city}`);
  }
  render() {
    return (
      
      <div className="App">
        <header className="App-header">

          <LocationList cities={cities} onSelectedLocation={this.handleSelectedLocation} />

        </header>
      </div>
    );
  }
}

export default App;
