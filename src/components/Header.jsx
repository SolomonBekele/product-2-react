import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
const Header = () => {
const [butName,setButName]=useState('Login')
  return(
  
  <div className="header flex justify-between items-center border border-black  ">
    <div className="logo-container w-40  rounded-2xl">
      <img
        className="logo "
        src={LOGO_URL}
        alt="logo"
      />
    </div>
    <div className="nav-items">
      <ul className="flex gap-4 mr-20 text-l font-light">
        <li>Home</li>
        <li>About us</li>
        <li>Contact us</li>
        <li>Cart</li>
        <button 
        onClick={()=> {
          butName ==='Login'?setButName('Logout'): setButName('Login')
          }} 

          className="border rounded px-2 bg-black text-white">{butName}</button>
      </ul>
    </div>
  </div>
);
}
export default Header;