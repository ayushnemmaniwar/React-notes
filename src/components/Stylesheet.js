import React from 'react';
import myStyles from './myStyles.css';
function Styelsheet(props){
    const x=props.primary?'primary':'';
    return(
        <div>
            <div className={`${x} secondary`}>
            <h1>Hello</h1>
            </div>
            <div style={styles}>
                <p>Hello</p>
            </div>
            <div className="primary">
                <p>Hello</p>
            </div>
        </div>
    );
}
// Inline Styles
const styles={
    fontSize:100,
    color:"red"
}
export default Styelsheet;