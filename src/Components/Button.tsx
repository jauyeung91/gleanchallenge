import React, { useState } from "react";

//import icons from react icons
import { BiMoon,BiSun} from "react-icons/bi";
import "./Button.css";




var setDay = function()
{
  document.body.style.background = "#F2F2F2"
  document.body.style.color= "#0C0E16" 
  document.getElementsByClassName("dd-list").body.style.background = " #252945"

}

var setNight = function()

{
  document.body.style.background = "#141625"
  document.body.style.color= "#FFFFFF" 

}

const Button= (props:any) => {
  
    //create initial menuCollapse state using useState hook
    const [dayAndNight, setDayNight] = useState(false)

    //create a custom function that will change menucollapse state from false to true and true to false
  const buttonClick = () => {
    //condition checking to change state from true to false and vice versa
    dayAndNight ? setDayNight(false) : setDayNight(true);
    dayAndNight ? setDay(): setNight() ;
  };

  return (
    <>
      <div id="button" onClick={buttonClick} >
        {dayAndNight?<BiSun/>: <BiMoon/>}
      </div>
    </>
  );
};

export default Button