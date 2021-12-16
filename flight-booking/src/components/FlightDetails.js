import axios from 'axios';
import React, { useEffect, useState } from 'react'
import BoundDetails from './BoundDetails';


function FlightDetails({outBoundSegments, inBoundSegments, searchData}) {

    const cabinMap = {
        "ECONOMY":  "Economy",
        "PREMIUM_ECONOMY":"Premium Economy",
        "BUSINESS": "Business",
        "FIRST": "First Class"
    }

    var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var now = new Date(searchData.departureDate);
    var day = days[ now.getDay() ];
    var month = months[ now.getMonth() ];
    var monthDate = now.getDate();
    var date = `${day}, ${month} ${monthDate}`;

    const [airlineName, setAirlineName] = useState("");

    useEffect(() => {
        const getAirlineName = async(code) =>{
            const response = await axios.get(`http://localhost:8080/airline/${code}`)
            setAirlineName(()=> response.data[0]);
        }
        getAirlineName(outBoundSegments[0].carrierCode);

    }, [outBoundSegments])


    return (
        <div className="container-flight-details container " >
            <div className="row">
                
                {/* <Logo airlineCode={outBoundSegments[0].carrierCode}/> */}
                <div className='airline'>
                    <h2>{airlineName}</h2>
                    <h2> {outBoundSegments[0].carrierCode} {outBoundSegments[0].number}</h2>
                </div>
 
                <div className="flight-date">
                    <h2 >{date}</h2>
                </div>
                <h2>Passenger(s): {searchData.adults}</h2>
                <div className="cabin">
                    <h3>Class:</h3>
                    <h2>{cabinMap[searchData.travelClass]}</h2>
                </div>
            </div>

            <BoundDetails BoundSegments={outBoundSegments} searchData={searchData} />

            {inBoundSegments.length>0 ?
            <>
                <h2>Return details:</h2>
                <h2>{airlineName} - {inBoundSegments[0].carrierCode} {inBoundSegments[0].number}</h2>
                <BoundDetails BoundSegments={inBoundSegments} searchData={searchData} />
            </> : " "}

            
        </div>
    )
}

export default FlightDetails
