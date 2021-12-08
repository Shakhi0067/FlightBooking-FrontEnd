import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Table } from 'react-bootstrap'
import  '../styles/list.css';
function List() {
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
            
            <center><h1 className='Flight_Heading'>Best Flights </h1></center>
            
            <hr width="900px;" size="2" className='border'/>
            <Table>
           
            <tbody>
            {
                        flights.filter((flight, idx) => idx < 3).map((flight)=>{
                            return(
                                <>
                                <tr key={flight.id} className='Clickable'>
                                <td><b>{flight.id}</b></td>
                                <td>{flight.name}</td>
                                <td>{flight.username}</td>
                                <td>{flight.email}<hr className='duration'/></td>
                                <td>
                                    {flight.address.street}<br/>
                                    {flight.address.city}:{flight.suite}
                                </td>
                                <td>
                                {flight.company.name}<br/>
                                    {flight.company.bs}:{flight.catchPhrase}</td>
                                <td>{flight.phone}</td>
                                </tr>
                                <br/>
                                </>
                            )
                        })
                    }
                     
                </tbody>
            </Table>
        </div>
        )
    }
export default  List;