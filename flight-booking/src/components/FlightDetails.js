import React from 'react'
import '../styles/container.css'

function FlightDetails() {
    return (
        <div className="container-flight-details container " >
            <div className="row">
                <h2>Airline Name/code</h2>
 
                <div>
                    <h2 className="date">Thursday, Nov 25</h2>
                </div>
                <div className="cabin">
                    <h3>Class:</h3>
                    <h2>Premium Economy</h2>
                </div>
            </div>

            <div className="flight-details">
                <div className="airport-row">
                    <h3>07:55</h3>
                    <span className="dot"></span>
                    <div className="airport">
                        <h3>New Delhi</h3>
                        <p>Indira Gandhi International Airport <br/> Terminal 1</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FlightDetails
