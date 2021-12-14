import React from 'react'
import '../styles/container.css'

function FareSummary({travelers}) {
    const basicFare = travelers.reduce((sum, traveler)=> sum + traveler.basePrice,0);
    const tax = Math.floor(travelers.reduce((sum, traveler)=> sum + (traveler.total - traveler.basePrice),0));
    const total = Math.floor(travelers.reduce((sum, traveler)=> sum + traveler.total,0));
    
    return (
        <div className="container-fare-summary container">
            <div>
                <h2>Fare Summary</h2>

                <div className="row">
                <h3>Base Fare </h3>
                <h3><span>&#8377;</span>{basicFare.toLocaleString('en-IN')} </h3>
                </div>
                <p>{travelers.length} X <span>&#8377;</span> {travelers[0].basePrice.toLocaleString('en-IN')}  </p>
                <hr/>

                <div className="row">
                <h3>Tax & Surcharges </h3>
                <h3><span>&#8377;</span>{tax.toLocaleString('en-IN')} </h3>
                </div>
                <hr className="hr-thick" />

                <div className="row">
                <h2>Total Amount </h2>
                <h2><span>&#8377;</span>{total.toLocaleString('en-IN')}  </h2>
                </div>
            </div>
        </div>
    )
}

export default FareSummary
