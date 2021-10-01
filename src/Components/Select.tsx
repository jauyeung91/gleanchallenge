import React, { useState } from "react";

//import icons from react icons

import "./Select.css";
import {BiChevronDown, BiChevronUp} from "react-icons/bi";

const myref = React.createRef();
const Select= (props:any) => {
  
    //create initial menuCollapse state using useState hook
    const [clicked, dropped] = useState(false)
    const [checkclick, checkbox] = useState(false)

  const itemClick = (key:any) => {

    checkclick? checkbox(false): checkbox(true);
    console.log(document.getElementById('1'))

  }

    //create a custom function that will change menucollapse state from false to true and true to false
  const selectClick = () => {
    //condition checking to change state from true to false and vice versa
    clicked ? dropped(false) : dropped(true);


  };

  return (
    <div className = "dd-wrapper">
      <div className= "dd-header">
        <div className = "dd-header-title" onClick = {selectClick} > Filter By Status {clicked?<BiChevronDown id = 'chevron'/> :<BiChevronUp id = 'chevron'/>} </div>
      </div>
          {clicked?
          <div className = "dd-list">
            <button onClick = {itemClick.bind(this, '0')} className = "dd-list-item"><div id='0' className = "checkbox"/>Draft</button>
            <button onClick = {itemClick.bind(this, '1')} className = "dd-list-item"><div id='1' className = "checkbox"/>Pending</button>
            <button onClick = {itemClick.bind(this, '2')} className = "dd-list-item"><div id='2' className = "checkbox"/>Paid</button>
          </div>
          :
          <p/>
        }
     
      
      </div>
   
  );
};

export default Select