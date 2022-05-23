import React,{Component,useState} from 'react';
import axios from 'axios';

const api = axios.create({
    baseURL:"https://localhost:7081/api/FlightBookings"
})



export class FlightBookings extends Component{

    state={
        flightbookings:[]

    }

    constructor(props) {
        super(props);
        this.getFlightBookings();

        
    }

    getFlightBookings = async () => {
        let data = await api.get('/').then(({data}) => data);
        this.setState({flightbookings:data})
        }
    

    deleteFlightBookings = async (id) => {
        let data = await api.delete(`/${id}`)
        this.getFlightBookings();
    }

    

    render(){
        
        
        return(
            <div>
                <table className="table table-striped table-dark">
                <thead>
                <tr>
                    <th>
                        Booking Number
                    </th>
                    <th>
                        Passenger Id
                    </th>
                    <th>
                        Flight Number
                    </th>
                    <th>
                        Delete
                    </th>
                </tr>
                </thead>
                <tbody>
                   

                   {this.state.flightbookings.map((fb)=> 
                        <tr key={fb.bookingNumber}>
                            <td>{fb.bookingNumber}</td>
                            <td>{fb.passengerId}</td>
                            <td>{fb.flightNumber}</td>
                            <td><button onClick={()=>this.deleteFlightBookings(fb.bookingNumber)}>X</button></td>
                            
                        </tr>
                    
                    )}
                </tbody>
            </table>
        </div>
        )
    }
}