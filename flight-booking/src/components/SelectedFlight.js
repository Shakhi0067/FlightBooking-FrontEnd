import React, { useEffect, useState } from 'react'
import req from './Req'
import FareSummary from './FareSummary'
import FlightDetails from './FlightDetails'
import '../styles/container.css'
import axios from 'axios';
import Loader from './Loader'

function SelectedFlight({selectedOffer}) {

    const initialRes = {
        "travelers": [
            {
                "id": "",
                "travelerType": "",
                "basePrice": 0,
                "total": 0
            },
            
        ],
        "outBoundSegments": [
            {
                "departure": {
                    "iataCode": "",
                    "terminal": "",
                    "at": ""
                },
                "arrival": {
                    "iataCode": "",
                    "at": ""
                },
                "carrierCode": "",
                "number": "",
                "duration": "",
                "weight": 0,
                "weightUnit": "KG"
            },
            
        ],
        "inBoundSegments": [
            {
                "departure": {
                    "iataCode": "",
                    "terminal": "",
                    "at": ""
                },
                "arrival": {
                    "iataCode": "",
                    "at": ""
                },
                "carrierCode": "",
                "number": "",
                "duration": "",
                "weight": 0,
                "weightUnit": "KG"
            }
        ]
    };
    const URL = "http://localhost:8080/confirm";
    const [res, setRes] = useState(initialRes); 
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

        const getResponse = async(req) => {
            console.log("calling api 3");
            const response = await axios.post(URL, req);
            if(response.status === 200){
                setRes(() => response.data);
                setIsLoading(() => false);
            }
            
        }

        getResponse(selectedOffer);
    }, [selectedOffer])

    return (
        <>
        {isLoading? <Loader color="#fff"/> :
        <div style={{"display": 'flex'}}>
            <FlightDetails outBoundSegments={res.outBoundSegments} inBoundSegments={res.inBoundSegments}/>
            <FareSummary travelers={res.travelers} />
        </div> }
        </>
    )
}

export default SelectedFlight
