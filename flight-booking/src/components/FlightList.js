import React from 'react'
import  '../styles/flightlist.css';
import Detail from './Detail';
import List from './List';
 function FlightList() {
    return (
        <>
        
        <div className="container">
            
            <div className="detail_box"><Detail/></div>
            <div className="list_box"><List/></div>
        </div>
        </>
    )
}
export default  FlightList;
