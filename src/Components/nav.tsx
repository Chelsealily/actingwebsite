import { Link } from "react-router-dom";
import "./nav.scss"
import house from '../assets/house.png'

const Nav = () => {
    return (
      
      <div className="nav">
        
        <Link className="nav__item" to="/">
          <img width= "20px" src={house}  ></img>
        </Link>
        <Link className="nav__item" to="/acting">
          Acting
        </Link>
        <Link className="nav__item" to="/modelling">
          Modelling
        </Link>
        <Link className="nav__item" to="/seemore">
          See More
        </Link>
        <Link className="nav__item--contact" to="/contact">
          Contact 
        </Link>
      </div>
    );
  };
  
  export default Nav;