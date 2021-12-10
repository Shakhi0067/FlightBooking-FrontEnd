import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FlightList from './components/FlightList';
import SelectedFlight from './components/SelectedFlight';
import { useState } from 'react';
import SearchLocations from './components/SearchLocations';

function App() {

  const [searchData, setSearchData] = useState({});
  const [selectedOffer, setSelectedOffer] = useState({});
  
  console.log(searchData)
  return (
    
    <Router>
      <>
        <Routes>
          <Route path="/" element={<SearchLocations setSearchData={setSearchData}/>}/>
          <Route path="/flights" element={<FlightList searchData={searchData} setSelectedOffer={setSelectedOffer}/>} />
          <Route path="/flight" element={<SelectedFlight searchData={searchData} selectedOffer={selectedOffer}/>} />
        </Routes>

      </>
    </Router>
   
  );
}

export default App;

