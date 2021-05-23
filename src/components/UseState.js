import React from 'react';
import {useState} from 'react';
function UseState(){
    const [set,setItem]=useState("Raju");
    function changeName(){
        if(set==="Raju")
            setItem("Ayush");
        else
            setItem("Raju");    
    }
    return(
        <div>
            <h1>Welcome {set}</h1>
            <button onClick={()=>{
                    changeName();

            }}>Subscribe</button>
        </div>
    );
}
export default UseState;