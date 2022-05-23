import axios from 'axios';
import React,{Component} from 'react';


export default class PostFlightBooking extends Component{
    constructor(props) {
        super(props)

        this.state={
            
            PassengerId:'',
            FlightNumber:'',
           
            
        }
    }

    changeHandler=e=> {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler=e=>{
        e.preventDefault()
        console.log(this.state)
        axios.post("https://localhost:7081/api/FlightBookings",this.state)
        .then(response=> {
            console.log(response)
        })
        .catch(error=>{
            console.log(error)
        })
    }

    
    render(){
        const {PassengerId,FlightNumber}=this.state
        return(
            <div>
                <form onSubmit={this.submitHandler}>
                    
                    <div>Passenger Id</div>
                    <div>
                        <input type = "int" name="PassengerId" value={PassengerId} onChange={this.changeHandler}/>
                    </div>
                    <div>Flight Number</div>
                    <div>
                        <input type = "int" name="FlightNumber" value={FlightNumber} onChange={this.changeHandler}/>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}
