import React from 'react'
import Detail from './Detail';
import List from './List';
 function FlightList({setSelectedOffer}) {
    return (
        <>  
        <div style={{"display": 'flex'}}>
            <Detail/>
            <List setSelectedOffer={setSelectedOffer}/>
        </div>
            
        </>
    )
}
export default  FlightList;
