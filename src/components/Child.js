import React from 'react';
import Props from './Props';

function Child(props){
    return(
        <div>
            <h1>Hello {props.name}</h1>
            <button onClick={props.fun}>Action</button>
        </div>
    );
}   
export default Child;