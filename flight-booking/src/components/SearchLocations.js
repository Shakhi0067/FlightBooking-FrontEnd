import React, {useState} from 'react'
import '../styles/FlightSearch.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios'
import Autosuggest from "react-autosuggest";




function SearchLocations() {
  
 const [depaturedate, setdepaturedate] = useState(new Date())
 const [arrivaldate, setarrivaldate] = useState(new Date())
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
  if(selectedRadio=="Enable"){
    type="Round Trip"
  }
  else if(selectedRadio=="Disable")
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
 
  const now = new Date();
if(origin===""){

  alert("provide origin");
}
else if(destination===""){
  alert("provide destination");
}
else if(arrivaldates<=now){
alert("Date must be in the future");
}
else if(depaturedates<=now){
  alert("Date must be in the future");
}

const dataWithOneWAY={
  origin: country,
  destination: location,
  depaturedate: depaturedate,
  cabin: travelclass,
  travellers: passengercount,
  triptype: type
}
console.log(dataWithOneWAY)

const dataWithRoundTrip={
  origin: country,
  destination: location,
  arrivaldate: arrivaldate,
  depaturedate: depaturedate,
  cabin: travelclass,
  travellers: passengercount,
  triptype: type
}
console.log(dataWithRoundTrip)



}  

    

  return (


    <div >
 

      <div class="container-fluid" > 

        <div id="search-form" >

          <div id="header" style={{ "padding-left": "12px", "border-bottom": "1px solid","border-color": "rgba(210, 211, 231, 0.89)" }}>
            <h2>Book Your Flight Ticket</h2>
          </div>
          <div class="flight" id="flightbox">

            <form id="flight-form" >



              <div class="row">
                <div class="col-sm-3">
                  <label class="rad-label">
                    <input type="radio" class="rad-input" id="one" name="rad" value={"Disable"}  onChange={HandleChangeValue} />
                    <div class="rad-design"></div>
                    <div class="rad-text">One Way</div>
                  </label>
                </div>

                <div class="col-sm-3">
                  <label class="rad-label">
                    <input type="radio" class="rad-input" id="round" name="rad"  value={"Enable"} onChange={HandleChangeValue} defaultChecked />
                    <div class="rad-design"></div>
                    <div class="rad-text">Round Trip</div>
                  </label>
                </div>
              </div>


              <div class="row">
                <div class="col-sm-2">
                  <div class="info-box" >
                
                    <label for="">Flying From</label>
                    <div id="arrive-box1">
                    <Autosuggest id= "origin" inputProps={{
                placeholder: "origin",
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
                      name: row.name
                    
                    }))
                  );
                } catch (e) {
                  setSuggestions([]);
                }
              }}
              onSuggestionsClearRequested={() => {
                setSuggestions([]);
              }}
              getSuggestionValue={suggestion => suggestion.name}
              renderSuggestion={suggestion => (
                <div>
                
                  {suggestion.name}
                </div>
              )}
              />
              
                  </div>
                  </div>
                </div>
                

                <div class="col-sm-2">
                  <div class="info-box" >
             
                    <label for="">Flying To</label>
                   <div id="arrive-box2">
                    <Autosuggest id= "destination" inputProps={{
                placeholder:  "destination",
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
                      name: row.name
                    
                    }))
                  );
                } catch (e) {
                  setSuggestion([]);
                }
              }}
              onSuggestionsClearRequested={() => {
                setSuggestion([]);
              }}
              getSuggestionValue={suggestion => suggestion.name}
              renderSuggestion={suggestion => (
                <div>
                  {suggestion.name}
                </div>
              )}
              />
              </div>
                 </div>
                  </div>
               

                <div class="col-sm-2">
                  <div class="info-box" >
                 
                    <label for="">Depaturing Date</label>
                    <DatePicker className="date" id="calender" selected={depaturedate}  onChange={(depature)=>setdepaturedate(depature)} /><br /><br />
                  </div>
                </div>

                <div class="col-sm-2" >
                  <div  >
                  <div class="info-box" style={{ "display ": "none" }}>
                    <label for="">Returning Date</label>
                    <DatePicker  disabled={selectedRadio === "Disable"} className="date" id="calender2" selected={arrivaldate} onChange={(arrival)=>setarrivaldate(arrival)} defaultChecked/><br /><br />
                    </div>
                  </div>
                </div>
          
                <div class="col-sm-2">
                  <div class="info-box">
                  
                    <label for="class-type" style={{ "margin-bottom": "1px" }}>Travel Class</label>
                    <select name="travlclas" id="travelclass">
                      <option value="Economy">Economy</option>
                      <option value="Premium Economy">Premium Economy</option>
                      <option value="Business">Business</option>
                      <option value="First Class">First Class</option>
                    </select>
                  </div>
                </div>


                <div class="col-sm-2">
                  <div id="flight-info" >
                    <div class="info-box">
                      <label for="adults" style={{ "margin-bottom": "1px" }}>Passengers</label>
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


              <div class="row">
                <div id="flight-search">
                  <div class="info-box">
                  
                    <a href="#" class="btn btn-primary btn-lg active" role="button" aria-pressed="true"  onClick={SubmitData} >Search</a>
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


