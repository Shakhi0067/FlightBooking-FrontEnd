import React, {useState} from 'react'
import '../styles/FlightSearch.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios'
import Autosuggest from "react-autosuggest";
import moment from 'moment';



function SearchLocations() {
  
 
 const [depaturedate, setdepaturedate] = useState()
 const [arrivaldate, setarrivaldate] = useState()
 const [selectedRadio, setSelectedRadio] = useState(" ");
 const HandleChangeValue = (e) => {
    setSelectedRadio(e.target.value);
};

const [country, setCountry] = React.useState("");
const [suggestions, setSuggestions] = React.useState([]);
const [location, setLocation] = React.useState("");
const [suggestion, setSuggestion] = React.useState([]);


 function SubmitData(e){
  e.preventDefault();
 
  var type="";
  if(selectedRadio==="Enable"){
    type="Round Trip"
  }
  else if(selectedRadio==="Disable")
  {
    type="One Way"
  }
  
  else{
  type ="Round Trip"
  }
     

  var passengercount=document.getElementById('passenger').value;
  var travelclass=document.getElementById('travelclass').value;
  var origin=country;
  var destination=location;
  var arrivaldates=arrivaldate;
  var depaturedates=depaturedate;
 
  var arrivalDate =document.getElementById('calender').value;
  var depatureDate =document.getElementById('calender2').value;


   /* let arrivalDate =arrivaldates.getFullYear() + "-" + (arrivaldates.getMonth() + 1) + "-" +arrivaldates.getDate() ;
let depatureDate =depaturedates.getFullYear() + "-" + (depaturedates.getMonth() + 1) + "-" +depaturedates.getDate() ;*/



var originCode=country.split(', ').pop();
var destinCode=location.split(', ').pop();

var data=new Object();
if(selectedRadio==="Enable"){
  data={
    originLocationCode: originCode,
    destinationLocationCode: destinCode,
    returnDate:  arrivalDate ,
    departDate: depatureDate,
    travelClass: travelclass,
    adults: passengercount,
    triptype: type
  }
}
else if(selectedRadio==="Disable"){
  data={
    originLocationCode: originCode,
    destinationLocationCode: destinCode,
    departDate: depatureDate,
    travelClass: travelclass,
    adults: passengercount,
    triptype: type
  }
}
else{
  data={
    originLocationCode: originCode,
    destinationLocationCode: destinCode,
    returnDate:  arrivalDate ,
    departDate: depatureDate,
    travelClass: travelclass,
    adults: passengercount,
    triptype: type
  }
}

const now = new Date();
if(origin===""){

  alert("provide Origin");
}
else if(destination===""){
  alert("provide Destination");
}

else if(arrivaldates<=depaturedates){
alert("Date must be in the future return date");
}
else if(depaturedates<=now){
  alert("Date must be in the future");
}
else{
  console.log(data)
}

}
  

    

  return (


    <div >
 

      <div className="container-fluid" > 

        <div id="search-form"  >

          <div id="header" style={{ "paddingLeft": "12px", "borderBottom": "1px solid","borderColor": "rgba(210, 211, 231, 0.89)" }}>
            <h2>Book Your Flight Ticket</h2>
          </div>
          <div className="flight" id="flightbox">

            <form id="flight-form" >



              <div className="row">
              
                <div className="col-sm-3">
                  <label className="rad-label">
                    <input type="radio" class="rad-input" id="round" name="rad"  value={"Enable"} onChange={HandleChangeValue} defaultChecked />
                    <div className="rad-design"></div>
                    <div className="rad-text">Round Trip</div>
                  </label>
                </div>

                <div className="col-sm-3">
                  <label className="rad-label">
                    <input type="radio" class="rad-input" id="one" name="rad" value={"Disable"}  onChange={HandleChangeValue} />
                    <div className="rad-design"></div>
                    <div className="rad-text">One Way</div>
                  </label>
                </div>
              </div>


              <div className="row">
                <div className="col-sm-2">
                  <div className="info-box" >
                
                    <label for="">Flying From</label>
                    <div id="arrive-box1" style={{ "backgroundColor": "white"}}>
                  
                    <Autosuggest inputProps={{
                placeholder: "Origin",
                autoComplete: "abcd",
                value: country,
                name: "country",
                onChange: (_event, { newValue }) => {
                  setCountry(newValue);
                }
              }}
              suggestions={suggestions}
              onSuggestionsFetchRequested={async ({ value }) => {
                if (!value) {
                  setSuggestions([]);
                  return;
                }

                try {
                  const response = await axios.get(
                    `http://localhost:8080/locations/${value}`
                  );

                  setSuggestions(
                    response.data.map(row => ({
                      name: row.name,
                      city: row.cityname,
                      countryname:row.countryName,
                      iata:row.iataCode
                    }))
                  );
                } catch (e) {
                  setSuggestions([]);
                }
              }}
              onSuggestionsClearRequested={() => {
                setSuggestions([]);
              }}
              getSuggestionValue={suggestion => (suggestion.name+", "+suggestion.city+", "+suggestion.countryname+", "+suggestion.iata)}
              renderSuggestion={suggestion => (
                <div >
                
                  {suggestion.name}<br/>
                  {suggestion.city},{" "}
                  {suggestion.iata},{" "}
                  {suggestion.countryname}
                 
                </div>
              )}
            
              />
                  </div>
                  </div>
                </div>
                

                <div class="col-sm-2">
                  <div class="info-box" >
                                                                                  
                    <label for="">Flying To</label>
                   <div id="arrive-box2" style={{ "backgroundColor": "white" }}>
               <Autosuggest  inputProps={{
                placeholder:  "Destination",
                autoComplete: "abcd",
                value: location,
                name: "location",
                onChange: (_event, { newValue }) => {
                  setLocation(newValue);
                }
              }}
              suggestions={suggestion}
              onSuggestionsFetchRequested={async ({ value }) => {
                if (!value) {
                  setSuggestion([]);
                  return;
                }

                try {
                  const response = await axios.get(
                    `http://localhost:8080/locations/${value}`
                  );

                  setSuggestion(
                    response.data.map(row => ({
                      name: row.name,
                      city: row.cityname,
                      countryname:row.countryName,
                      iata:row.iataCode
                    
                    }))
                  );
                } catch (e) {
                  setSuggestion([]);
                }
              }}
              onSuggestionsClearRequested={() => {
                setSuggestion([]);
              }}
              getSuggestionValue={suggestion => (suggestion.name+", "+suggestion.city+", "+suggestion.countryname+", "+suggestion.iata)}
              renderSuggestion={suggestion => (
                <div>
                 {suggestion.name}<br/>
                  {suggestion.city},{" "}
                  {suggestion.iata},{" "}
                  {suggestion.countryname}
                 
                 
                </div>
              )}
              />
              </div>
                 </div>
                  </div>
               
                
                <div className="col-sm-2">
                  <div className="info-box" >
                 
                    <label >Depaturing Date</label>
                    <DatePicker  className="date" id="calender" selected={depaturedate}  onChange={(depature)=>setdepaturedate(depature) } dateFormat={'yyyy-MM-dd'} /><br /><br />
                  </div>
                </div>

                <div className="col-sm-2" >
                  <div className="info-box" >
                    <label for="">Returning Date</label>
                    <DatePicker  disabled={selectedRadio === "Disable"} className="date" id="calender2"  selected={arrivaldate}  onChange={(arrival)=>setarrivaldate (arrival)}  dateFormat={'yyyy-MM-dd'}defaultChecked/><br /><br />
                    </div>
                  </div>
              
          
                <div className="col-sm-2">
                  <div className="info-box">
                  
                    <label for="class-type" style={{ "marginBottom": "1px" }}>Travel Class</label>
                    <select name="travlclas" id="travelclass">
                      <option value="Economy">Economy</option>
                      <option value="Premium Economy">Premium Economy</option>
                      <option value="Business">Business</option>
                      <option value="First Class">First Class</option>
                    </select>
                  </div>
                </div>


                <div className="col-sm-2">
                  <div id="flight-info" >
                    <div className="info-box">
                      <label for="adults" style={{ "marginBottom": "1px" }}>Passengers</label>
                      <select name="peoples" id="passenger" style={{ "width": "140px" }}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>
                    </div>
                  </div>
                </div>

              </div>


              <div className="row">
                <div id="flight-search">
                  <div className="info-box">
                  
                    <a href="#" className="btn btn-primary btn-lg active" role="button" aria-pressed="true"  onClick={SubmitData} >Search</a>
                  </div>
                </div>
              </div>

            </form>
          </div>
        </div>
       
      </div>
  
    </div>
  )
}
export default SearchLocations


