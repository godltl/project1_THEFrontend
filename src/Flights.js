import React,{Component,useState} from 'react';
import axios from 'axios';


const api = axios.create({
    baseURL:"https://localhost:7081/api/Flights"
})

export class Flights extends Component{

    state={
        flights:[]

    }

    constructor(props) {
        super(props);
        this.getFlights();

        
    }

    getFlights = async () => {
        let data = await api.get('/').then(({data}) => data);
        this.setState({flights:data})
        }
    

    createFlight = async (id) => {
        let data = await api.post(`/${id}`)
        this.getFlights();
    }
    

    deleteFlight = async (id) => {
        let data = await api.delete(`/${id}`)
        this.getFlights();
    }

    
    

    render(){
       
        
        return(
            <div>
                <table className="table table-striped table-dark">
                <thead>
                <tr>
                    <th>
                        Flight Number
                    </th>
                    <th>
                        Departure Date
                    </th>
                    <th>
                        Arrival Date
                    </th>
                    <th>
                        Departure Time
                    </th>
                    <th>
                        Arrival Time
                    </th>
                    <th>
                        Departure Airport
                    </th>
                    <th>
                        Arrival Airport
                    </th>
                    <th>
                        Passenger Limit
                    </th>
                    <th>
                        Delete
                    </th>
                    
                </tr>
                </thead>
                <tbody>
                   

                   {this.state.flights.map((fli)=> 
                        <tr key={fli.flightNumber}>
                            <td>{fli.flightNumber}</td>
                            <td>{fli.departureDate}</td>
                            <td>{fli.arrivalDate}</td>
                            <td>{fli.departureTime}</td>
                            <td>{fli.arrivalTime}</td>
                            <td>{fli.departureAirport}</td>
                            <td>{fli.arrivalAirport}</td>
                            <td>{fli.passengerLimit}</td>
                            <td><button onClick={()=>this.deleteFlight(fli.flightNumber)}>X</button></td>
                            
                        </tr>
                    
                    )}
                </tbody>
            </table>
        </div>
        )
    }
}