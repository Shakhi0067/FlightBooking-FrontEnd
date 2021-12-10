import React from 'react'

const airCraft = {
    "32B": "Airbus 32 B",
    "788": "Airbus 788"
}

const FlightList = ({ flights }) => {
    const value = Object.keys(flights.data)
    return (
        <div>
            <center><h1>Flight List</h1></center>
            {value?.map((duration) => ( // PT14, PT15
                flights.data[duration].map((items, index) => (
                    <div key={index} className="card">
                        <div className="card-body">
                            <h5 className="card-title">Flight Code: {airCraft[items.aircraft.code]}</h5>
                            <h5 className="card-text">Travel Duration: {items.duration.split("PT")[1]}</h5>
                            <h5 className="card-text">Departure Date: {items.departure.at.split("T")[0]}</h5>
                            <h5 className="card-text">Arrival Date: {items.arrival.at.split("T")[0]}</h5>
                            <h5 className="card-text">Total Amount: {flights.price.total}</h5>
                        </div>
                    </div>
                ))
            ))}
        </div>
    )
};

export default FlightList