import  '../styles/detail.css';

function Detail({searchData}) {

    const cabinMap = {
        "ECONOMY":  "Economy",
        "PREMIUM_ECONOMY":"Premium Economy",
        "BUSINESS": "Business",
        "FIRST": "First Class"
    }

    return (
        <div className='detail_box'>
            <h2>{searchData.tripType}</h2>
            <table className="Detail-table">
                <tbody>
                    <tr className="table-row">
                        <td><h2>Passenger(s): {searchData.adults}</h2></td><td></td><td><h3>Class:</h3><h2>{cabinMap[searchData.travelClass]}</h2></td>
                    </tr>
                    <tr className="table-row">
                        <td>From <br/><h2><b>{searchData.originCity}<br/>({searchData.originLocationCode})</b></h2></td><td></td><td>To <br/><h2><b>{searchData.destinationCity}<br/>({searchData.destinationLocationCode})</b></h2></td>
                    </tr>  
                    <tr className="table-row">
                        <td>Departure<br/><b><h2>{searchData.departureDate}</h2></b></td><td></td><td>{searchData.returnDate && <span>Return</span>}<br/><b><h2>{searchData.returnDate && searchData.returnDate}</h2></b></td>
                    </tr>
                    
                </tbody>
            </table>
        </div>
    )
}
export default  Detail;