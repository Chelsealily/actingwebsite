import "./headshots.scss"
import red2 from "../assets/headshots/red2.jpg"
import blacktop2 from "../assets/headshots/blacktop2.jpg"

const Headshots = () => {
    return (

        <div className="headshot_container">
            
            <div className="column">
                <div className="content">
                    <img src={blacktop2} alt="White top headshot" height="200rem" loading="eager"/>
                </div>
            </div>
            <div className="column">
                <div className="content">
                    <img src={red2} alt="Red jumper headshot" height="200rem" loading="eager" />
                </div>
            </div>
        </div>
    )
}

export default Headshots;
