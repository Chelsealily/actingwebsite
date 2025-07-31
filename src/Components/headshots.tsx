import "./headshots.scss"
import blacktrench from "../assets/headshots/blacktrench.jpg"
import red from "../assets/headshots/redjumper.jpg"
import business from "../assets/headshots/business.png"
import white from "../assets/headshots/whitetop.jpg"

const Headshots = () => {
    return (
    <div className="headshot_container">

    <div className="row">
    <div className="column">
    <div className="content">
      <img src={blacktrench} alt="Black trench coat headshot" height="200rem"/>
    </div>
    </div>
    <div className="column">
    <div className="content">
      <img src={business} alt="Blue Blazer Business headshot" height="200rem"/>
    </div>
    </div>

    <div className="column">
    <div className="content">
      <img src={white} alt="White top headshot" height="200rem"/>
    </div>
    </div>
    
    <div className="column">
    <div className="content">
      <img src={red} alt="red jumper headshot" height="200rem"/>
    </div>
    </div>
   
</div>
</div>
)
}

export default Headshots;