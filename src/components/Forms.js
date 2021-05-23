import React from 'react'
import {useState} from 'react';
function Forms(){
    const [values,changeValue]=useState("hello");
    function Change(event)
    { 
        changeValue(event.target.value);
    }
   console.log(values);
    return (
        <div>
            <label>UserName</label>
            <input type="text" onChange={Change}/>
        </div>
    );
}
export default Forms;