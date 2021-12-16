import React, { useEffect, useState } from 'react'
import axios from 'axios'
import  '../styles/list.css';
import Offer from './Offer';
import Loader from './Loader';
import { useNavigate } from 'react-router-dom';

function List({searchData,setSelectedOffer}) {
    const [flightOffers, setflightOffers] = useState([])
    //const [searchInput, setSearchInput] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();
    const query = "http://localhost:8080/flights";

    useEffect(() => {

        const getOffers = async(searchData) => {
            console.log("calling api 2");
            const response = await axios.post(query,searchData);
            if(response.status === 200){
                setflightOffers(() => response.data);
                setIsLoading(() => false);
            }
            
        }
        getOffers(searchData);
    }, [searchData])

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
                flightOffers.length>0?
                    <div className='search-results'>
                        {flightOffers.map((offer) => <Offer offer={offer} key={offer.id}
                                handleOfferClick={handleOfferClick} origin={searchData.originCity} 
                                    destination={searchData.destinationCity} />)}               
                    </div>: <h2>Sorry! No such flights available.</h2>
            }
        </div> 
        
        </>
        )
    }
export default  List;