import React from 'react'
import '../styles/container.css'

function FareSummary() {
    return (
        <div className="container-fare-summary container">
            <div>
                <h2>Fare Summary</h2>

                <div className="row">
                <h3>Base Fare </h3>
                <h3><span>&#8377;</span>4,663 </h3>
                </div>
                <p>1 X <span>&#8377;</span> 4,663 </p>
                <hr/>

                <div className="row">
                <h3>Fee & Surcharges </h3>
                <h3><span>&#8377;</span>781 </h3>
                </div>
                <hr className="hr-thick" />

                <div className="row">
                <h2>Total Amount </h2>
                <h3><span>&#8377;</span>5,454 </h3>
                </div>
            </div>
        </div>
    )
}

export default FareSummary
