import {LOGO_URL} from "../../utils/constants";
import { useState } from "react";

const Haeder = () => {
  const[login, setLogin] = useState("Login")
    return (
      <div className="header-container">
        <div className="logo-container">
          <img
            className="logo"
            src={LOGO_URL}
          />
        </div>
  
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>contact us</li>
            <li>cart</li>
            <button className="login" onClick = {()=>setLogin(login === 'Login' ? 'Logout':'Login')}>{login}</button>
             </ul>
        </div>
      </div>
    );
  };
  export default Haeder;