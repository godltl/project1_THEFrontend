import axios from 'axios';
import React,{Component} from 'react';


export default class PostFlight extends Component{
    constructor(props) {
        super(props)

        this.state={
            
            DepartureDate:'',
            ArrivalDate:'',
            DepartureTime:'',
            ArrivalTime:'',
            DepartureAirport:'',
            ArrivalAirport:'',
            PassengerLimit:''
        }
    }

    changeHandler=e=> {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler=e=>{
        e.preventDefault()
        console.log(this.state)
        axios.post("https://localhost:7081/api/Flights",this.state)
        .then(response=> {
            console.log(response)
        })
        .catch(error=>{
            console.log(error)
        })
    }

    
    render(){
        const {DepartureDate,ArrivalDate,DepartureTime,ArrivalTime,DepartureAirport,ArrivalAirport,PassengerLimit }=this.state
        return(
            <div>
                <form onSubmit={this.submitHandler}>
                    
                    <div>Departure Date</div>
                    <div>
                        <input type = "date" name="DepartureDate" value={DepartureDate} onChange={this.changeHandler}/>
                    </div>
                    <div>Arrival Date</div>
                    <div>
                        <input type = "date" name="ArrivalDate" value={ArrivalDate} onChange={this.changeHandler}/>
                    </div>
                    <div>Departure Time</div>
                    <div>
                        <input type = "time" name="DepartureTime" value={DepartureTime} onChange={this.changeHandler}/>
                    </div>
                    <div>Arrival Time</div>
                    <div>
                        <input type = "time" name="ArrivalTime" value={ArrivalTime} onChange={this.changeHandler}/>
                    </div>
                    <div>Departure Airport</div>
                    <div>
                        <input type = "text" name="DepartureAirport" minlength="3" maxlength="3" value={DepartureAirport} onChange={this.changeHandler}/>
                    </div>
                    <div>Arrival Airport</div>
                    <div>
                        <input type = "text" name="ArrivalAirport" minlength="3" maxlength="3" value={ArrivalAirport} onChange={this.changeHandler}/>
                    </div>
                    <div>Passenger Limit</div>
                    <div>
                        <input type = "number" name="PassengerLimit" min="1" max="200" value={PassengerLimit} onChange={this.changeHandler}/>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}
