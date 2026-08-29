import './modelpage.scss'
import ScrollToTop from 'react-scroll-to-top'
import model from '../assets/main/model.png'
import { Link } from 'react-router-dom'
import home from '../assets/house.svg'
import Footer from '../Components/footer'
import ModelVideo from '../Components/modelvideo'

function Modelpage() {
  
    return (
      <>
     <div className="modelling-page">
  <img
    className="modelling-background" fetchPriority="high"
  decoding="async"
    src={model}
    alt="Chelsea Li - London Based British East Asian Commercial Model"
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

          <section className="gallery-section">
      

          </section>

          <section className="pinboard-section">
              <div className="modelabout-container">
      <div className={`modelabout-text`}>
        Chelsea Li is a British East Asian Commercial model based in London with over 10 years experience in screen acting and commercial modelling. 
        <br></br><br></br>
        With a large portfolio working in stills, video, corporate, VO and UGC, she has worked with big brands such as Fox's Mints, Gunvor, Puttshack, Namco, Hakkasan, Rimmel and so on.
        <br>
        </br><br></br>
        With her vibrant style and great smile she brings a fun vibe to everyshoot 
      </div>
<br></br>

    </div>
          </section>

          <section className="showreel-section">
          <ModelVideo/>
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

export default Modelpage