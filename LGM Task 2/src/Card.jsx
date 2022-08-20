import React, { useState } from "react";
function Card(){
    const[api,Setfakeapi]= useState([])

    const apikey=async ()=>{
        const response=await fetch("https://fakestoreapi.com/products?limit=5")
        const jsondata=await response.json();
        Setfakeapi(jsondata);

    }
    
    

return (
<div>
    <nav >
        <div class="navbar">
    <h1 class="heading">FETCH API</h1>
    <button onClick={apikey} class="btn">Click Here</button>
    </div>
    </nav>
    <div class="cconatainer">

        {api.map((values) =>{
            return(
                <div className="ctitle">
                
                <h2>{values.title} </h2>
                <h3>Price: {values.price} ₹</h3>
                <p>{values.description}</p>
                <img src={values.image}  alt="Image" ></img>
                </div> 
            )
        })}
            
         
            
        

        
            
    
    </div>
</div>
    )
}
export default Card;