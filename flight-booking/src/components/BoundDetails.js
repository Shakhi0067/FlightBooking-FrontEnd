import React from 'react'
import { dateResolver, durationResolver, timeResolver } from './Resolvers';
import Segment from './Segment';

function BoundDetails({BoundSegments, searchData}) {

    const [firstSegment, ...segments] = [...BoundSegments];

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
                            <h3>{searchData.originCity}</h3>
                            <p>{searchData.originAirport} AIRPORT <br/>
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
                            <h3>{segments.length===0? searchData.destinationCity : firstSegment.arrival.iataCode}</h3>
                            <p>{segments.length===0? searchData.destinationAirport :firstSegment.arrival.iataCode} AIRPORT <br/>
                               {firstSegment.arrival.terminal &&
                                <span> Terminal: {firstSegment.arrival.terminal}</span>}
                            </p>
                        </div>
                    </div>
                    
                    {segments.map((segment, index) => <Segment segment={segment} key={segment.arrival.iataCode} 
                                                        index={index} segmentLength={segments.length-1}
                                                            searchData={searchData}/>)}
                    
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
