import './actingpage.scss'
import ScrollToTop from 'react-scroll-to-top'
import Footer from '../Components/footer'
import act from '../assets/main/act.png'
import blacktop from '../assets/headshots/redjumper.png'
import About from '../Components/about'
import Youtube from '../Components/youtube'
import Slideshow from '../Components/slideshow'
import home from '../assets/house.svg'
import { Link } from 'react-router-dom'

function Actingpage() {
    return (
    <>

     <div className="acting-page">
  <img
    className="acting-background" fetchPriority="high"
  decoding="async"
    src={act}
    alt="Chelsea Li - London Based British East Asian Actress"
  />

          <div className="acting-content">
            <div className="home">
                <Link className="back" to="/">
        <img
    className="home-button"
    src={home}
    alt="Actress, Model, UGC Creator"
  /></Link>
       </div>

          <section className="credits-section">
    
      (2026) - Wolf Tracker (Feature Film) - Supporting <br></br> <br></br> 
      (2026) - Jackie The Stripper (Feature Film) - Supporting<br></br> <br></br> 
      (2026) - To The Splace (Short Film) - Lead <br></br> <br></br> 
      (2025) - Mickey 17 (Feature Film) - Featured<br></br> <br></br> 
      (2024) - The Beekeeper (Feature Film) - Featured<br></br> <br></br> 
  
          </section>

          <section className="about-section">
             <img src={blacktop} alt="Black Top headshot" loading="eager"/> <About/>
          </section>

          <section className="gallery-section">
           <Slideshow/>
          </section>

          <section className="showreel-section">
    
            <Youtube/>
          </section>

          <section className="contact-section">
             
            <div className="nav">

         <a href="mailto:chelsea.lily.ig@gmail.com" className="button">Email</a>

        </div>
          </section>
</div>
</div>
  <Footer />
  <ScrollToTop smooth />
    </>
  )
}

export default Actingpage;