import React from 'react';
import Child from './Child'
function Parent(){
    function fun1(){
        alert("hello");
    }
    return(
        <div>
            <Child fun={()=>{
                fun1();
            }} name="ayush"/>
        </div>
    );
}
export default Parent;