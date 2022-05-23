import React,{useState,useEffect} from 'react';
import { createAPIEndpoint, ENDPS } from './Api';
import PostFlightBooking from './PostFlightBooking';

export default function AddAFlightBooking(props){

    

    return(
        <div class="p-3 mb-2 bg-dark text-white">
            <h1>Add a Reservation</h1> <PostFlightBooking/>
            
        </div>
    )
    
}
