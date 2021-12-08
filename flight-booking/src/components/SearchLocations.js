import React, { useEffect, useState } from 'react'
import '../styles/FlightSearch.css'

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import $ from 'jquery';
import Select from 'react-select'
import axios from 'axios'

function SearchLocations() {
  
  const [depaturedate, setdepaturedate] = useState(new Date())
  const [arrivaldate, setarrivaldate] = useState(new Date())

    const [orgins, setorgins] = useState([])
    const [result, setresult] = useState([])

    const [orgin, setorgin] = useState('')

    useEffect(() => {
      depatureandArrivalOptions()
  }, [])


  const [selectedRadio, setSelectedRadio] = useState(" ");
  const HandleChangeValue = (e) => {
    setSelectedRadio(e.target.value);
};

function depatureandArrivalOptions() {
  const uniqueOrgins=["Delhi","Kochi","Trivandrum","Chennai","Bangalore","Kozhikode","kannur","Borjhar","Telengena","Coimbathoor","Dibrugarh"]
 
  const orginAirportOptions = uniqueOrgins.map(airport => (
    {
        "value": airport,
        "label": airport
    }
))

setorgins(orginAirportOptions)
  }


 /* function suggestLocations(e){


    if(e.length>2){
      const url = `http://localhost:8080/searchLocations/${e}`
  
          axios.get(url).then((response) => {
              if(response.data.length===0){
                  alert("invalid location")
              }
              else{
                setresult(response.data)
              }
              
          })
    }
    }*/

  return (


    <div >


      <div class="container-fluid" >

        <div id="search-form">

          <div id="header" style={{ "padding-left": "12px", "border-bottom": "1px solid","border-color": "rgba(210, 211, 231, 0.89)" }}>
            <h2>Book Your Flight Ticket</h2>
          </div>
          <div class="flight" id="flightbox">

            <form id="flight-form">



              <div class="row">
                <div class="col-sm-3">
                  <label class="rad-label">
                    <input type="radio" class="rad-input" name="rad" value={"Disable"}  onChange={HandleChangeValue}/>
                    <div class="rad-design"></div>
                    <div class="rad-text">One Way</div>
                  </label>
                </div>
                <div class="col-sm-3">
                  <label class="rad-label">
                    <input type="radio" class="rad-input" name="rad"  value={"Enable"} onChange={HandleChangeValue} />
                    <div class="rad-design"></div>
                    <div class="rad-text">Round Trip</div>
                  </label>
                </div>
              </div>

              <div class="row">
                <div class="col-sm-2">
                  <div class="info-box">
                    <label for="">Flying From</label>
                    <Select className="org" options={orgins} placeholder="Orgin"  onChange={(e) => { setorgin(e.value) }} style={{"width":"50px"}}/>
                  
                  </div>
                </div>

                <div class="col-sm-2">
                  <div class="info-box" id="arrive-box">
                    <label for="">Flying To</label>
                    <Select className="des" options={orgins} placeholder="Destination"  onChange={(e) => { setorgin(e.value) }} />

                  </div>
                </div>

                <div class="col-sm-2">
                  <div class="info-box" id="datepicker1">
                    <label for="">Depaturing Date</label>
                    <DatePicker className="date" id="calender" selected={depaturedate} onChange={(depature) => setdepaturedate(depature)} /><br /><br />

                  </div>
                </div>

                <div class="col-sm-2" >
                  <div  >
                  <div class="info-box" id="return-box" style={{ "display ": "none" }}>
                    <label for="">Returning Date</label>
                    <DatePicker  disabled={selectedRadio === "Disable"} className="date" id="calender2" selected={arrivaldate} onChange={(arrival) => setarrivaldate(arrival)} /><br /><br />
                    </div>
                  </div>
                </div>

                <div class="col-sm-2">
                  <div class="info-box">
                    <label for="class-type" style={{ "margin-bottom": "1px" }}>Travel Class</label>
                    <select name="class-type" id="class-type">

                      <option value="Economy">Economy</option>
                      <option value="Business">Business</option>
                      <option value="First">First Class</option>
                    </select>
                  </div>
                </div>

                <div class="col-sm-2">
                  <div id="flight-info" >

                    <div class="info-box">
                      <label for="adults" style={{ "margin-bottom": "1px" }}>Passengers</label>
                      <select name="class-type" id="class-type" style={{ "width": "140px" }}>

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
                    <a href="#" class="btn btn-primary btn-lg active" role="button" aria-pressed="true" >Search</a>
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


