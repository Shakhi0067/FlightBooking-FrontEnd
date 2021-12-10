import React, { Component } from 'react';
import FlightList from './components/FlightList';

class App extends Component {
  state = {
    data: {},
    price: {}
  }

  componentDidMount() {
    fetch('http://localhost:8080/api/flights?origin=COK&destination=LON&departDate=2022-01-25&adults=3&travelClass=ECONOMY&returnDate=2022-01-26')
      .then(res => res.json()).then((data) => {
        const iteneries = data[0].itineraries.reduce(function (acc, itr) {
          acc[itr.duration] = itr.segments
          return acc
        }, {})
        this.setState({ data: iteneries, price: data[0].price })
      })
      .catch(console.log)
  }



  render() {
    return (
      <FlightList flights={this.state} />
    )
  }
}

export default App;

