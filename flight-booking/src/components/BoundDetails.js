import axios from 'axios';
import React, {useEffect, useState} from 'react'
import { dateResolver, durationResolver, timeResolver } from './Resolvers';
import Segment from './Segment';

function BoundDetails({BoundSegments, searchData, isOutBound}) {

    const [firstSegment, ...segments] = [...BoundSegments];
    const [airport, setAirport] = useState({'city':" ", 'airportName':" " });
    
    useEffect(() => {  

        const getAirportName = async (code) => {
            const response = await axios.get( `http://localhost:8080/locations/${code}`);            
            setAirport(() => ({'city': response.data[0].cityname, 'airportName':response.data[0].name }));
        }
        
        getAirportName(firstSegment.arrival.iataCode);
    }, [firstSegment])



    return (
        <>
           <div className="details">

                <div className="flight-details">
                    <div className="airport-row">
                        <div className="airport-row-date-time">
                            <h3>{timeResolver(firstSegment.departure.at)}</h3>
                            <p >{dateResolver(firstSegment.departure.at)}</p>
                        </div>
                        
                        <span className="dot"></span>
                        <div className="airport">
                            <h3>{isOutBound? searchData.originCity : searchData.destinationCity}</h3>
                            <p>{isOutBound? searchData.originAirport: searchData.destinationAirport} AIRPORT <br/>
                            {firstSegment.departure.terminal &&
                                <span> Terminal: {firstSegment.departure.terminal}</span>}
                            </p>
                        </div>
                    </div>

                    <div className="duration">
                        <p>{durationResolver(firstSegment.duration)}</p>
                    </div>


                    <div className="airport-row">
                        <div className="airport-row-date-time">
                            <h3>{timeResolver(firstSegment.arrival.at)}</h3>
                            <p >{dateResolver(firstSegment.arrival.at)}</p>
                        </div>
                        <span className="dot"></span>
                        <div className="airport">
                            <h3>{segments.length===0? searchData.destinationCity :  airport.city}</h3>
                            <p>{segments.length===0? searchData.destinationAirport : airport.airportName} AIRPORT <br/>

                               {firstSegment.arrival.terminal &&
                                <span> Terminal: {firstSegment.arrival.terminal}</span>}
                            </p>
                        </div>
                    </div>
                    
                    {segments.map((segment, index) => <Segment segment={segment} key={segment.arrival.iataCode} 
                                                        index={index} segmentLength={segments.length-1}
                                                            searchData={searchData} airport={airport} isOutBound={isOutBound}/>)}
                    
                </div>

                <div className="passenger-details">
                    <h3>Checked-in Baggage</h3>
                    <div>                       
                        <div className="baggage-row">
                            <div className="baggage-col">

                                <h3>{firstSegment.weight} Kg</h3>
                            </div>
                                
                        </div>
                    </div>
                        
                </div>
            </div> 
        </>
    )
}

export default BoundDetails
