import { Link } from "react-router-dom";
import "./nav.scss"

const Nav = () => {
    return (
      
      <div className="nav">
        
        <Link className="nav__item" to="/acting">
          Actress
        </Link>
        <br></br>
        <Link className="nav__item-1" to="/modelling">
          Model
        </Link><br></br>
        <Link className="nav__item" to="/ugc">
          UGC 
        </Link>
        <br></br>
        
      </div>
    );
  };
  
  export default Nav;