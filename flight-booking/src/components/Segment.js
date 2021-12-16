import { dateResolver, durationResolver, timeResolver } from './Resolvers'

function Segment({segment, index,segmentLength,searchData}) {

    const isLastSegment = index === segmentLength;
  
    return (
        <>
            <hr/>
            <div className="airport-row">
                <div className="airport-row-date-time">
                    <h3>{timeResolver(segment.departure.at)}</h3>
                    <p >{dateResolver(segment.departure.at)}</p>
                </div>
                <span className="dot"></span>
                <div className="airport">
                    <h3>{segment.departure.iataCode}</h3>
                    <p>{segment.departure.iataCode} AIRPORT <br/>
                        {segment.departure.terminal &&
                            <span> Terminal: {segment.departure.terminal}</span>}
                    </p>
                </div>
            </div>

            <div className="duration">
                <p>{durationResolver(segment.duration)}</p>
            </div>


            <div className="airport-row">
                <div className="airport-row-date-time">
                    <h3>{timeResolver(segment.arrival.at)}</h3>
                    <p >{dateResolver(segment.arrival.at)}</p>
                </div>
                <span className="dot"></span>
                <div className="airport">
                    <h3>{isLastSegment?searchData.destinationCity : segment.arrival.iataCode}</h3>
                    <p>{isLastSegment?searchData.destinationAirport :segment.arrival.iataCode} AIRPORT <br/>
                        {segment.arrival.terminal &&
                            <span> Terminal: {segment.arrival.terminal}</span>}
                    </p>
                </div>
            </div>
            
        </>
    )
}

export default Segment
