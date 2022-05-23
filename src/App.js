import './App.css';
import Home from './Home';
import PutPassenger from './PutPassenger';
import PutFlight from './PutFlight';
import PutReservation from './PutReservation';
import {Passengers} from './Passengers';
import { FlightBookings } from './FlightBooking'; 
import AddAFlight from './AddAFlight';
import AddAPassenger from './AddAPassenger';
import {Flights} from './Flights';
import {BrowserRouter, Route,NavLink, Routes} from 'react-router-dom';
import React from 'react';
import { ErrorPage } from './ErrorPage';
import AddAFlightBooking from './AddAFlightBooking';


function App() {
  return (
    <BrowserRouter>
    <div className="App container">
      <h3 className="d-flex justify-content-center m-3">
        Airline Manager
      </h3>
        
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <ul className="navbar-nav">
          <li className="nav-item- m-1">
            <NavLink className="btn btn-light btn-outline-primary" to="">
              Home Page
            </NavLink>
          </li>
          <li className="nav-item- m-1">
            <NavLink className="btn btn-light btn-outline-primary" to="/Flights">
              All Flights
            </NavLink>
          </li>
          <li className="nav-item- m-1">
            <NavLink className="btn btn-light btn-outline-primary" to="/Passengers">
              All Passengers
            </NavLink>
          </li>
          <li className="nav-item- m-1">
            <NavLink className="btn btn-light btn-outline-primary" to="/Reservations">
              All Reservations
            </NavLink>
          </li>
          <li className="nav-item- m-1">
            <NavLink className="btn btn-light btn-outline-primary" to="/AddFlights">
              Add Flights
            </NavLink>
          </li>
          <li className="nav-item- m-1">
            <NavLink className="btn btn-light btn-outline-primary" to="/AddPassengers">
              Add Passengers
            </NavLink>
          </li>
          <li className="nav-item- m-1">
            <NavLink className="btn btn-light btn-outline-primary" to="/AddReservations">
              Add a Reservation
            </NavLink>
          </li>
          <li className="nav-item- m-1">
            <NavLink className="btn btn-light btn-outline-primary" to="/UpdatePassenger">
              Update Passenger
            </NavLink>
          </li>
          <li className="nav-item- m-1">
            <NavLink className="btn btn-light btn-outline-primary" to="/UpdateFlight">
              Update Flight
            </NavLink>
          </li>
          <li className="nav-item- m-1">
            <NavLink className="btn btn-light btn-outline-primary" to="/UpdateReservation">
              Update Reservation
            </NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route exact path='/Flights' element={<Flights/>}/>
        <Route exact path='/AddFlights' element={<AddAFlight/>}/>
        <Route exact path='/Passengers' element={<Passengers/>}/>
        <Route exact path='/AddPassengers' element={<AddAPassenger/>}/>
        <Route exact path='/UpdatePassenger' element={<PutPassenger/>}/>
        <Route exact path='/UpdateFlight' element={<PutFlight/>}/>
        <Route exact path='/UpdateReservation' element={<PutReservation/>}/>
        <Route exact path='/Reservations' element={<FlightBookings/>}/>
        <Route exact path='/AddReservations' element={<AddAFlightBooking/>}/>
        <Route exact path='' element={<Home/>}/>
        <Route exact path='*' element={<ErrorPage/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;