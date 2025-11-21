import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../hooks/useOnlineStatus";
import { useUserContext } from "../context/userContext";

const Header = () => {
  const [butName, setButName] = useState("Login");
  const isOnline = useOnlineStatus()
  const {setAuthUser} = useUserContext();
  return (
    <div className="header flex justify-between items-center border border-black mb-2 ">
      <div className="logo-container w-40  rounded-2xl">
        <img className="logo " src={LOGO_URL} alt="logo" />
      </div>
      <div className="nav-items">
        <ul className="flex gap-4 mr-20 text-lg font-light">
         {/* <li>{isOnline ? "🟢" : "🔴"}</li> */}

          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/about">About us</Link>
          </li>

          <li>
            <Link to="/contact">Contact us</Link>
          </li>

          <li>
            <Link to="/grocery">Grocery</Link>
          </li>

          <button
            onClick={() => {
              butName === "Login" ? setButName("Logout") : setButName("Login");
              setAuthUser('hey');

            }}
            className="border rounded px-2 bg-black text-white"
          >
            {butName}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
