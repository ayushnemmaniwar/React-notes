import React from 'react';
import {useState,useEffect} from 'react';

function UseEffect(){
    const [count,setCount]=useState(0);
    function INC()
    {
        setCount(count+1);
    }
     useEffect(()=>{
        document.title=`You Clicked ${count}`;
    },[count])
    //Intiall it will work and for every updation it will update
    //https://www.youtube.com/watch?v=8DYlzVUTC7s&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=51
    //try to watch this link if [count] not understood
    //if we include count the updation only depends on count 
    //otherwise it will call when text is also changed
    return(
        <div>
            <button onClick={INC}>Click {count}</button>
        </div>
    );
}
export default UseEffect;