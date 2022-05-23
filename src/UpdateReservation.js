import axios from 'axios';
import React,{Component} from 'react';


export default class UpdateReservation extends Component{
    constructor(props) {
        super(props)


        this.state={
            BookingNumber: '',
            PassengerId:'',
            FlightNumber:''
           
            
        }
        
    }

    changeHandler=e=> {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler=e=>{
        var id=this.state.BookingNumber;
        e.preventDefault()
        console.log(this.state)
        axios.put(`https://localhost:7081/api/FlightBookings/${id}`,this.state)
        .then(response=> {
            console.log(response)
        })
        .catch(error=>{
            console.log(error)
        })
    }

    
    render(){
        const {BookingNumber,PassengerId,FlightNumber}=this.state
        return(
            <div class="p-3 mb-2 bg-dark text-white">
                <h1>Update a Reservation</h1>
                <form onSubmit={this.submitHandler}>
                    <div>Booking Number</div>
                    <div>
                        <input type = "number" name="BookingNumber" min="1" value={BookingNumber} onChange={this.changeHandler}/>
                    </div>
                    <div>Passenger Id</div>
                    <div>
                        <input type = "number" name="PassengerId" min="1" value={PassengerId} onChange={this.changeHandler}/>
                    </div>
                    <div>Flight Number</div>
                    <div>
                        <input type = "number" name="FlightNumber" min="1" value={FlightNumber} onChange={this.changeHandler}/>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}
