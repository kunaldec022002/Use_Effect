import React, { useEffect, useState } from "react";
import "./Count.css";

function Home()
{

    const [Count, setCount] = useState(0);

    function showCountValue()
    {
       
    }

    useEffect(()=> {
        console.log(`value of count is: ${Count}`)

    },[Count])

   
    function inc()
    {
        setCount (Count +1)
    }

    function dec()
    {
        setCount (Count -1)
    }
   

    return(
        <>

        <h1 className="text-center">
            Counter App
        </h1>

        <p className="text-center">{Count}</p>
     

     <div className="flex-box">

        <button onClick={inc} className="counter-btn">
            Inc
        </button>

        
        <button onClick={dec} className="counter-btn">
            Dec
        </button>

     </div>

   
        </>
    )
}

export default Home