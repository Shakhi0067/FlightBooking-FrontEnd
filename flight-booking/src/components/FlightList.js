import React from 'react'
import Detail from './Detail';
import List from './List';
 function FlightList({searchData, setSelectedOffer}) {
    return (
        <>  
        <div style={{"display": 'flex'}}>
            <Detail searchData={searchData}/>
            <List searchData={searchData} setSelectedOffer={setSelectedOffer}/>
        </div>
            
        </>
    )
}
export default  FlightList;
