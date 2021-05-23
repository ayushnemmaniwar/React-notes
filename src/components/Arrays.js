import React, { useState } from 'react'
function Arrays(){
    const [items,setItem]=useState([]);
    function addItem(){
        console.log("k");
        let temp=[].concat(items);
        console.log(temp);
        let x={
            id:temp.length+1,
            value: Math.floor(Math.random()*10),
        }
        temp.push(x);
        setItem(temp);
    }
    return(
        <div>
            <button onClick={addItem}>click</button>
            <ul>
                {
                    items.map((item)=>{
                        return <li>{item.id} {item.value}</li>
                    })
                }
            </ul>
        </div>
    );
}
export default Arrays;