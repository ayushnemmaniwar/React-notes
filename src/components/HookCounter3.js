import React, { useState } from 'react'
const names={
    first:'',
    last:''
}
function HookCounter3(){
    const [name,setName]=useState(names);
    function changeFirst(event)
    {
     let x=event.target.value;
     let y=(name);
     y.first=x;
     setName({...name,y});//copy everyting from name and chage y
     //setName({first:x});
    }
    return(
        <div>
            <input type="text" onChange={changeFirst}/>
            <h1>Hello {name.first}</h1>
        </div>
    );
}
export default HookCounter3;