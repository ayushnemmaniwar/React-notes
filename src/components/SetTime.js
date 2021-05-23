import React,{useState,useEffect} from 'react';

function SetTime()
{   const [count,setCount]=useState(0);
    const tick=()=>{
        setCount(count+1);
    }
    useEffect(()=>{
        const interval=setInterval(tick,1000);
        return()=>{
            clearInterval(interval)
        }
    },[count])
    //when you want to stop useeffect and print last stmt
    //we can use return stmt in useeffect
    return(
        <div>
            {count}
        </div>
    );
}

export default SetTime;