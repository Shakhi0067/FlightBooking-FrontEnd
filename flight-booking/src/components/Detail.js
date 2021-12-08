import React, { useEffect, useState } from 'react'
import axios from 'axios'
import  '../styles/detail.css';
function Detail() {
    
    const [flights, setflights] = useState([])

    const refreshList=()=>{
        const url = 'http://jsonplaceholder.typicode.com/users'
        axios.get(url).then((response) => {
            setflights(response.data)
        })
    }


   useEffect(()=>{
       refreshList()
   },[])
    return (
        <div>
            <table className="Detail-table">
                <tbody>
                    <tr className="table-row">
                        <td><b><h2>One Way</h2></b><br/> </td> <td><b><h2>Economy</h2></b> <br/></td>
                    </tr><br/>
                    <tr className="table-row">
                        <td>From <br/><h2><b>New Delhi<br/>(DEL)</b></h2></td>{''}<td>To <br/><h2><b>Mumbai<br/>(BOM)</b></h2></td>
                    </tr><br/>
                    <br/>
                    <tr className="table-row">
                        <td>Departure<br/> <b><h2>07-12-2021</h2></b></td>{''}{''}<td>Return<br/> <b><h2>09-12-2021</h2></b></td>
                    </tr><br/>
                    
                    <tr className="table-row">
                        <td>Passengers<br/>
                        <b><h2>1</h2></b></td>
                    </tr>
                    

                </tbody>
            </table>
        </div>
    )
}
export default  Detail;