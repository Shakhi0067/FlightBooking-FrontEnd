import React from 'react'
<<<<<<< HEAD
//import req from './Req'
import FareSummary from './FareSummary'
import FlightDetails from './FlightDetails'
import res from './Res';

function SelectedFlight() {

   // console.log(req.itineraries);
    console.log(res);


    return (
        <div style={{"display": 'flex'}}>
            <FlightDetails/>
            <FareSummary res={res} />
=======
import FareSummary from './FareSummary'
import FlightDetails from './FlightDetails'

function SelectedFlight() {
    return (
        <div style={{"display": 'flex'}}>
            <FlightDetails/>
            <FareSummary/>
>>>>>>> 6b2b782 (basic layout completed)
        </div>
    )
}

export default SelectedFlight
