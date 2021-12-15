import React, { useEffect, useState } from 'react'
import axios from 'axios'
import  '../styles/list.css';
import Offer from './Offer';
import Loader from './Loader';
import { useNavigate } from 'react-router-dom';

function List({setSelectedOffer}) {
    const [flightOffers, setflightOffers] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();
    const query = "http://localhost:8080/flights";

    const inp = {
        "originLocationCode": "COK",
        "destinationLocationCode": "LON",
        "departureDate" : "2021-12-25",
        "adults":2,
        "returnDate":"2021-12-30",
        "travelClass":"ECONOMY"
    }

    useEffect(() => {

        const getOffers = async(query) => {
            console.log("calling api 2");
            const response = await axios.post(query,inp);
            if(response.status === 200){
                setflightOffers(() => response.data);
                setIsLoading(() => false);
            }
            
        }
        getOffers(query);
    }, [])

    const handleOfferClick = (offer) =>{
        console.log("clicked!!!! ",offer.id)
        setSelectedOffer(() => offer);
        navigate('/flight');
    }

    //console.log(flightOffers);
    return (
        <>
       
        <div className="list_box">         
            <h1 className='Flight_Heading'>Best Flights For You</h1>
            <hr className='border'/>

            {isLoading? <Loader color={'rgba(210, 211, 231, 0.89)'}/> :
            <div className='search-results'>
                {flightOffers.map((offer) => <Offer offer={offer} key={offer.id}
                        handleOfferClick={handleOfferClick} />)}               
            </div>
            }
        </div> 
        
        </>
        )
    }
export default  List;