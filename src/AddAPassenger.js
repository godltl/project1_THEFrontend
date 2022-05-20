import React,{useState,useEffect} from 'react';
import { createAPIEndpoint, ENDPS } from './Api';
import PostPassenger from './PostPassenger';

export default function AddAPassenger(props){

    

    return(
        <div class="p-3 mb-2 bg-dark text-white">
            <h1>Add a Passenger</h1> <PostPassenger/>
            
        </div>
    )
    
}
