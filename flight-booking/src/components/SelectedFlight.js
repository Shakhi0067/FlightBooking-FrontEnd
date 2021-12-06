import React from 'react'
import FareSummary from './FareSummary'
import FlightDetails from './FlightDetails'

function SelectedFlight() {
    return (
        <div style={{"display": 'flex'}}>
            <FlightDetails/>
            <FareSummary/>
        </div>
    )
}

export default SelectedFlight
