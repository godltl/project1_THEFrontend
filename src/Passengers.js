import React,{Component,useState} from 'react';
import { variables } from './Variables';
import axios from 'axios';

const api = axios.create({
    baseURL:"https://localhost:7081/api/Passengers"
})



export class Passengers extends Component{

    state={
        passengers:[]

    }

    constructor(props) {
        super(props);
        this.getPassengers();

        
    }

    getPassengers = async () => {
        let data = await api.get('/').then(({data}) => data);
        this.setState({passengers:data})
        }
    

    deletePassenger = async (id) => {
        let data = await api.delete(`/${id}`)
        this.getPassengers();
    }

    

    render(){
        
        
        return(
            <div>
                <table className="table table-striped table-dark">
                <thead>
                <tr>
                    <th>
                        Passenger Id
                    </th>
                    <th>
                        Name
                    </th>
                    <th>
                        Job
                    </th>
                    <th>
                        Email
                    </th>
                    <th>
                        Age
                    </th>
                    <th>
                        Confirmation Number
                    </th>
                    <th>
                        Delete
                    </th>
                </tr>
                </thead>
                <tbody>
                   

                   {this.state.passengers.map((pass)=> 
                        <tr key={pass.passengerId}>
                            <td>{pass.passengerId}</td>
                            <td>{pass.name}</td>
                            <td>{pass.job}</td>
                            <td>{pass.email}</td>
                            <td>{pass.age}</td>
                            <td>{pass.confirmationNumber}</td>
                            <td><button onClick={()=>this.deletePassenger(pass.passengerId)}>X</button></td>
                            
                        </tr>
                    
                    )}
                </tbody>
            </table>
        </div>
        )
    }
}