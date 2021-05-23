import React, { useState } from 'react'
function HookCounter(){
    const [count,setCount]=useState(0);
    function INC()
    {   
        // Form2
        for(let i=0;i<5;i++)
            setCount(pre =>pre+1);
    }
    function DSC()
    {
        // form1
        if(count!=0)
            setCount(count-1);
    }
    function Reset()
    {
        setCount(0);
    }
    return(
        <div>
            <h1>Click +{count}</h1>
            <button onClick={INC}>+</button>
            <button onClick={DSC}>-</button>
            <button onClick={Reset}>Reset</button>
        </div>
    );
}
export default HookCounter;