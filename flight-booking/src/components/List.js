import React from 'react'
import { Table } from 'react-bootstrap'
import  '../styles/list.css';
function List() {
    return (
        <div>
            <center><h1>Best Flights </h1><br/></center>
            <hr width="800px;" size="2" />
            <Table>
           
            <tbody>
                    {
                       
                                <tr className="Clickable">
                                
                                <td>flightName</td>
                                <td> 
                                    departureHour:departureMinute<br/>
                                    sourceAirport</td>
                                <td>duration<hr/></td>
                                <td>
                                    arrivalHour:arrivalMinute<br/>
                                    destinationAirport<br/></td>
                                <td>price</td>
                                
                               </tr>
                            
                       
                    }<br/>
                    {
                       
                            <tr className="Clickable">
                       
                            <td>flightName</td>
                            <td> 
                           departureHour:departureMinute<br/>
                           sourceAirport</td>
                            <td>duration<hr/></td>
                            <td>
                           arrivalHour:arrivalMinute<br/>
                           destinationAirport<br/></td>
                            <td>price</td>
                      
                            </tr>
                   
              
                     }<br/><br/>
                    {
                       
                       <tr className="Clickable">
                       
                       <td>flightName</td>
                       <td> 
                           departureHour:departureMinute<br/>
                           sourceAirport</td>
                       <td>duration<hr/></td>
                       <td>
                           arrivalHour:arrivalMinute<br/>
                           destinationAirport<br/></td>
                       <td>price</td>
                      
                      </tr>
                   
              
                    }
                     
                </tbody>
            </Table>
        </div>
    )
}
export default  List;