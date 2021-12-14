import './App.css';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import FlightList from './components/FlightList';
import SelectedFlight from './components/SelectedFlight';
import { useState } from 'react';

function App() {

  const [selectedOffer, setSelectedOffer] = useState({});
  console.log(selectedOffer)
  return (
    <Router>
      <>
        <Routes>
          <Route path="/" element={<FlightList setSelectedOffer={setSelectedOffer}/>} />
          <Route path="/flight" element={<SelectedFlight selectedOffer={selectedOffer}/>} />
        </Routes>

      </>
    </Router>
   
  );
}

export default App;
