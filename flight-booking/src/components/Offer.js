import React from 'react'
import Logo from './Logo';
import { dateResolver, durationResolver, timeResolver } from './Resolvers'

function Offer({offer, handleOfferClick, origin, destination}) {

    const segments = offer.itineraries[0].segments;
    const {carrierCode, number} = {...segments[0]}
    const departureTime = timeResolver(segments[0].departure.at);
    const departureDate = dateResolver(segments[0].departure.at);
    const arrivalTime = timeResolver(segments.at(-1).arrival.at);
    const arrivalDate = dateResolver(segments.at(-1).arrival.at);

    return (
        <div className='offer-row' onClick={() => handleOfferClick(offer)}>
            <Logo airlineCode={carrierCode}/>
            <h2>{carrierCode} {number}</h2>

            <div className='col-wrapper'>
                <h2>{departureTime}</h2>
                <h4>{departureDate}</h4>
                <span>{origin}</span>
            </div>
                    
            <div className='col-wrapper'>
            <h3 className='duration-offer'>{durationResolver(offer.itineraries[0].duration)}</h3>
            <center>{segments.length-1} stop(s)</center> 
            </div>

            <div className='col-wrapper'>
                <h2>{arrivalTime}</h2>
                <h4>{arrivalDate}</h4>
                <span>{destination}</span>
            </div>

            <h2><span>&#8377;</span>{offer.price.total.toLocaleString('en-IN')}</h2>

        </div>
    )
}

export default Offer
