import React from 'react'
import  '../styles/detail.css';
function Detail() {
    return (
        <div>
            <table className="Detail-table">
                <tbody>
                    <tr className="table-row">
                        <td>Trip Type</td>{''}<td>Cabin class</td>
                    </tr><br/>
                    <tr className="table-row">
                        <td>From <br/>Origin</td>{''}<td>To <br/>Destination</td>
                    </tr><br/>
                    <br/>
                    <tr className="table-row">
                        <td>Departure<br/> Date</td>{''}{''}<td>Return<br/> Date</td>
                    </tr><br/>
                    
                    <tr className="table-row">
                        <td>Passengers<br/>
                        1</td>
                    </tr>
                    

                </tbody>
            </table>
        </div>
    )
}
export default  Detail;