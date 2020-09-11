import React, { Fragment } from 'react'
import spinner from "./spinner.gif"
const Spinner = () => {
    //we dont need return in arrow function anyway
    return (
       <Fragment>
            <img src={spinner} alt="Loading..." style={{width:"auto", margin:"200px", display: "block"}}>

            </img>
       </Fragment>
    );
}
export default Spinner;