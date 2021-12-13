import React from 'react'
import '../styles/container.css'

function Segment({segment, resolvers}) {
//console.log(segment);

    return (
        <>
            <hr/>
            <div className="airport-row">
                <div className="airport-row-date-time">
                    <h3>{resolvers.timeResolver(segment.departure.at)}</h3>
                    <p >{resolvers.dateResolver(segment.departure.at)}</p>
                </div>
                <span className="dot"></span>
                <div className="airport">
                    <h3>{segment.departure.iataCode}</h3>
                    <p>{segment.departure.iataCode} International Airport <br/>
                        Terminal: {segment.departure.terminal}
                    </p>
                </div>
            </div>

            <div className="duration">
                <p>{resolvers.durationResolver(segment.duration)}</p>
            </div>


            <div className="airport-row">
                <div className="airport-row-date-time">
                    <h3>{resolvers.timeResolver(segment.arrival.at)}</h3>
                    <p >{resolvers.dateResolver(segment.arrival.at)}</p>
                </div>
                <span className="dot"></span>
                <div className="airport">
                    <h3>{segment.arrival.iataCode}</h3>
                    <p>{segment.arrival.iataCode} International Airport <br/>
                        Terminal: {segment.arrival.terminal}
                    </p>
                </div>
            </div>
            
        </>
    )
}

export default Segment
