import React from 'react'
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
        </div>
    )
}

export default SelectedFlight
