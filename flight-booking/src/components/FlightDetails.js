import React from 'react'
import BoundDetails from './BoundDetails';
import Logo from './Logo';
import { logoResolver } from './Resolvers';

function FlightDetails({outBoundSegments, inBoundSegments}) {


    return (
        <div className="container-flight-details container " >
            <div className="row">
                
                    <Logo airlineCode={outBoundSegments[0].carrierCode}/>
                    <h2> {outBoundSegments[0].carrierCode} {outBoundSegments[0].number}</h2>
                
                
 
                <div className="date">
                    <h2 >Thursday, Nov 25</h2>
                </div>
                <h2>Passenger(s): 1</h2>
                <div className="cabin">
                    <h3>Class:</h3>
                    <h2>Premium Economy</h2>
                </div>
            </div>

            <BoundDetails BoundSegments={outBoundSegments} />

            {inBoundSegments.length>0 ?
            <>
                <h2>Return details:</h2>
                <h2>{inBoundSegments[0].carrierCode} {inBoundSegments[0].number}</h2>
                <BoundDetails BoundSegments={inBoundSegments} />
            </> : " "}

            
        </div>
    )
}

export default FlightDetails
