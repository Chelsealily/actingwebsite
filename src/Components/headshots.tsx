import "./headshots.scss"
import red3 from "../assets/headshots/red3.jpg"
import red2 from "../assets/headshots/red2.jpg"
import whitetop2 from "../assets/headshots/whitetop2.jpg"
import blacktop2 from "../assets/headshots/blacktop2.jpg"

const Headshots = () => {
    return (

        <div className="headshot_container">
            <div className="column">
                <div className="content">
                    <img src={red3} alt="Black trench coat headshot" height="200rem" loading="lazy" />
                </div>
            </div>
            <div className="column">
                <div className="content">
                    <img src={whitetop2} alt="Blue Blazer Business headshot" height="200rem" loading="lazy" />
                </div>
            </div>
            <div className="column">
                <div className="content">
                    <img src={blacktop2} alt="White top headshot" height="200rem" loading="lazy"/>
                </div>
            </div>
            <div className="column">
                <div className="content">
                    <img src={red2} alt="Red jumper headshot" height="200rem" loading="lazy" />
                </div>
            </div>
        </div>
    )
}

export default Headshots;
