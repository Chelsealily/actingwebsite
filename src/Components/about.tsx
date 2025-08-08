import { useState } from "react";
import "./about.scss";

const About = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleReadMore = () => setExpanded(prev => !prev);

  return (
    <div className="about-container">
      <div className={`about-text ${expanded ? "expanded" : ""}`}>
        Chelsea Li is a British East Asian actor based in London with a background in screen acting and commercial modelling. Often cast in roles that lean mysterious, glamorous, or emotionally layered. Her recent work includes a featured role in a major studio film (handpicked by Oscar-winning director Bong Joon-ho), alongside a mix of indie thrillers and fashion-led short films.
        Though her native accent is British/Kent, she is also successful in booking work in a US/Cali accent. She trained at The Actors' Temple and London School of Screen Acting and has also undertaken various acting workshops and 1-2-1's with working actors, directors and casting agents.
        When she's not on set, you’ll find her building her own creative projects as an Actress, Model and a Software Engineer, all whilst quietly plotting world domination over a matcha latte with her little chihuahua.
    
      </div>
<br></br>
      <button className="read-more-btn" onClick={toggleReadMore}>
        {expanded ? "Show less" : "Read more"}
      </button>
    </div>
  );
};

export default About;



