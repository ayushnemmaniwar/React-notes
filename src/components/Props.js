import React from 'react'

// function Props(){
//     return <h1>Hello Ayush</h1>
// }

// props are immutabel(we cant change)
const Props=(props)=>{
   return (
    <div>
        <h1>Hello {props.name}</h1>
        {/* Children is keyword */}
        {props.children}
   </div>
   )
}
export default Props;