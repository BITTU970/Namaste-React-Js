import {LOGO_URL} from "../../utils/constants";

const Haeder = () => {
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
          </ul>
        </div>
      </div>
    );
  };
  export default Haeder;