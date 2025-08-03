import { useState } from "react";
import "./about.scss";

const About = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleReadMore = () => setExpanded(prev => !prev);

  return (
    <div className="about-container">
      <div className={`about-text ${expanded ? "expanded" : ""}`}>
        Chelsea Li is a British East Asian actor based in London with a background in screen acting and commercial modelling. Often cast in roles that lean mysterious, glamorous, or emotionally layered. Her recent work includes a featured role in a major studio film (handpicked by Oscar-winning director Bong Joon-ho), alongside a mix of indie thrillers, fashion-led short films, and grounded character work.
         She trained at The Actors' Temple and London School of Screen Acting and has also undertaken various acting workshops with working actors, directors and casting agents.
        When she's not on set, you’ll find her building her own creative projects or quietly plotting world domination over a matcha latte with her little chihuahua.
    
      </div>

      <button className="read-more-btn" onClick={toggleReadMore}>
        {expanded ? "Show less" : "Read more"}
      </button>
    </div>
  );
};

export default About;



