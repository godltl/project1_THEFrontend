import axios from 'axios';
import React,{Component} from 'react';


export default class PostPassenger extends Component{
    constructor(props) {
        super(props)

        this.state={
            PassengerId: '',
            Name:'',
            Job:'',
            Email:'',
            Age:'',
            ConfirmationNumber:''
            
        }
    }

    changeHandler=e=> {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler=e=>{
        e.preventDefault()
        console.log(this.state)
        axios.post("https://localhost:7081/api/Passengers",this.state)
        .then(response=> {
            console.log(response)
        })
        .catch(error=>{
            console.log(error)
        })
    }

    
    render(){
        const {PassengerId,Name,Job,Email,Age,ConfirmationNumber}=this.state
        return(
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>Passenger Id</div>
                    <div>
                        <input type = "text" name="PassengerId" value={PassengerId} onChange={this.changeHandler}/>
                    </div>
                    <div>Name</div>
                    <div>
                        <input type = "text" name="Name" value={Name} onChange={this.changeHandler}/>
                    </div>
                    <div>Job</div>
                    <div>
                        <input type = "text" name="Job" value={Job} onChange={this.changeHandler}/>
                    </div>
                    <div>Email</div>
                    <div>
                        <input type = "text" name="Email" value={Email} onChange={this.changeHandler}/>
                    </div>
                    <div>Age</div>
                    <div>
                        <input type = "text" name="Age" value={Age} onChange={this.changeHandler}/>
                    </div>
                    <div>Confirmation Number</div>
                    <div>
                        <input type = "text" name="ConfirmationNumber" value={ConfirmationNumber} onChange={this.changeHandler}/>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}
