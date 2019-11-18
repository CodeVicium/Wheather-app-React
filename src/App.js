import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import { Grid, Row, Col } from 'react-flexbox-grid';
import './App.css';
import LocationList from './Components/LocationList';
import ForecastExtended from './Components/ForecastExtended';
import Watch from  './Components/Watch';

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
  constructor() {
    super();
    this.state = {
      city: null,
    }
  }

  handleSelectedLocation = city => {
    this.setState({ city });
    // console.log(`handleSelectedLocation ${city}`);
  }
  render() {
    const { city } = this.state;
    return (

      <Grid>
        <Row>
          <AppBar position='sticky'>
            <Toolbar>
              <Typography variant='inherit' color='inherit'>
                Weather App
              </Typography>
             
              
                <Tooltip placement="right">
                  <Watch></Watch>
                </Tooltip>
              
            </Toolbar>
          </AppBar>
        </Row>
        <Row>
          <Col xs={12} md={6}>


            <LocationList cities={cities.sort()} onSelectedLocation={this.handleSelectedLocation} />


          </Col>
          <Col xs={12} md={6}>
            <Paper zDept={4}>
              <div className="details">
              { 
                city &&
                  <ForecastExtended city={city}></ForecastExtended>
                }
              
              </div>
            </Paper>
          </Col>

        </Row>

      </Grid>
    );
  }
}

export default App;
