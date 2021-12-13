import React from 'react'
import Segment from './Segment';

function BoundDetails({BoundSegments, resolvers}) {

    const [firstSegment, ...segments] = [...BoundSegments];
    console.log(segments)

    return (
        <>
           <div className="details">

                <div className="flight-details">
                    <div className="airport-row">
                        <div className="airport-row-date-time">
                            <h3>{resolvers.timeResolver(firstSegment.departure.at)}</h3>
                            <p >{resolvers.dateResolver(firstSegment.departure.at)}</p>
                        </div>
                        
                        <span className="dot"></span>
                        <div className="airport">
                        <h3>{firstSegment.departure.iataCode}</h3>
                            <p>{firstSegment.departure.iataCode} International Airport <br/>
                                Terminal: {firstSegment.departure.terminal}
                            </p>
                        </div>
                    </div>

                    <div className="duration">
                        <p>{resolvers.durationResolver(firstSegment.duration)}</p>
                    </div>


                    <div className="airport-row">
                        <div className="airport-row-date-time">
                            <h3>{resolvers.timeResolver(firstSegment.arrival.at)}</h3>
                            <p >{resolvers.dateResolver(firstSegment.arrival.at)}</p>
                        </div>
                        <span className="dot"></span>
                        <div className="airport">
                            <h3>{firstSegment.arrival.iataCode}</h3>
                            <p>{firstSegment.arrival.iataCode} International Airport <br/>
                                Terminal: {firstSegment.arrival.terminal}
                            </p>
                        </div>
                    </div>
                    
                    {segments.map((segment) => <Segment segment={segment} resolvers={resolvers} 
                        key={segment.arrival.iataCode} />)}
                    
                </div>

                <div className="passenger-details">
                    <h3>Checked-in Baggage</h3>
                    <div>                       
                        <div className="baggage-row">
                            <div className="baggage-col">
                                <h3>{firstSegment.weight} {firstSegment.weightUnit} /per person</h3>
                            </div>
                                
                        </div>
                    </div>
                        
                </div>
            </div> 
        </>
    )
}

export default BoundDetails
