import React from 'react'
import '../styles/container.css'
import BoundDetails from './BoundDetails';

function FlightDetails({outBoundSegments, inBoundSegments}) {

    const timeResolver = (data) => {
        const dateObj = new Date(data);
        return(dateObj.toTimeString().split(" ")[0].slice(0,-3));
    }

    const durationResolver = (data) => {
        var duration = data.slice(2);
        var index = duration.indexOf('H')+1;
        duration = duration.slice(0,index)+" "+ duration.slice(index);
        return(duration);
    }

    const dateResolver = (data) => {
        var date = new Date(data);
        var year = date.getFullYear();
        var month = date.getMonth()+1;
        var dt = date.getDate();

        if (dt < 10) {
            dt = '0' + dt;
        }
        if (month < 10) {
            month = '0' + month;
        }

        return(dt + '-' + month + '-' + year );
    }

    const resolvers = {
        'timeResolver': timeResolver,
        'dateResolver': dateResolver,
        'durationResolver': durationResolver,
    }


    return (
        <div className="container-flight-details container " >
            <div className="row">
                <h2>Airline name/code</h2>
 
                <div className="date">
                    <h2 >Thursday, Nov 25</h2>
                </div>
                <h2>Passenger(s): 1</h2>
                <div className="cabin">
                    <h3>Class:</h3>
                    <h2>Premium Economy</h2>
                </div>
            </div>

            <BoundDetails BoundSegments={outBoundSegments} resolvers={resolvers}/>

            {inBoundSegments && 
            <h2>Return details:</h2>}
            {inBoundSegments && 
            <BoundDetails BoundSegments={inBoundSegments} resolvers={resolvers}/>}

            
        </div>
    )
}

export default FlightDetails
