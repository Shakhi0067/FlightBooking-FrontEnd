import React from 'react'
import { dateResolver, durationResolver, timeResolver } from './Resolvers';
import Segment from './Segment';

function BoundDetails({BoundSegments}) {

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
                            <h3>{firstSegment.departure.iataCode}</h3>
                            <p>{firstSegment.departure.iataCode} International Airport <br/>
                                Terminal: {firstSegment.departure.terminal}
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
                            <h3>{firstSegment.arrival.iataCode}</h3>
                            <p>{firstSegment.arrival.iataCode} International Airport <br/>
                                Terminal: {firstSegment.arrival.terminal}
                            </p>
                        </div>
                    </div>
                    
                    {segments.map((segment) => <Segment segment={segment} key={segment.arrival.iataCode} />)}
                    
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
