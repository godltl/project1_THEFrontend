import React,{useState,useEffect} from 'react';

import PostFlight from './PostFlight';

export default function AddAFlight(props){

    

    return(
        <div class="p-3 mb-2 bg-dark text-white">
            <h1>Add a Flight</h1> <PostFlight/>
        </div>
    )
    
}
