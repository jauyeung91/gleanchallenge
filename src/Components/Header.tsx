import React, { useState, Component } from "react";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

//import icons from react icons
import { BiMoon,BiSun} from "react-icons/bi";



//import sidebar css from react-pro-sidebar module and our custom css 
import "react-pro-sidebar/dist/css/styles.css";
import "./Header.css";
import Button from './Button'

class Header extends Component{

 
  render(){
      return (
        <>
          <div id="header">
            <ProSidebar >
              <Button/>
            </ProSidebar>
          </div>
        </>
      );
};

  }





export default Header