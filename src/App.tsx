import './App.scss'
import ScrollToTop from 'react-scroll-to-top'
import logoInsta from './assets/insta.svg'
import logoSalary from "./assets/payp.svg"
import logoPort from "./assets/pint.svg"
import logoSpot from "./assets/spot.svg"
import logoImdb from "./assets/imdb.svg"
import Slideshow from "./Components/slideshow"
import Headshots from './Components/headshots'
import logo from './assets/chelsea li title logo.png'
import About from './Components/about'
import Footer from './Components/footer'
import Youtube from './youtube'
import Contact from './Components/contact'

function App() {
  return (
    <>
      <div className="header">
      <img className="title__logo" width="250px" src={logo} alt="Chelsea Li Official Actress website logo"/>
        <br></br>
        </div>
       

      <div className="slide_container">
      <Slideshow/>
      </div>
    <About/>

      <Headshots/>

      <Youtube/>

      <span className="welcome-icons">

        <a href="https://www.imdb.com/name/nm5891887/" target="_blank">
        <img className="welcome__logo" width="60px" src={logoImdb} alt="Imdb logo"/></a>

        <a href="https://app.spotlight.com/9118-3423-3884" target="_blank">
        <img className="welcome__logo" width="60px" src={logoSpot} alt="Spotlight logo"/></a>

      <a href="https://uk.pinterest.com/cbean0261/chelsea-li/?invite_code=f50a35a67c2c4d779cce7e3290f29c10&sender=1021332159153324013" target="_blank">
        <img className="welcome__logo" width="60px" src={logoPort} alt="pinterest logo"/></a>

      <a href="https://www.instagram.com/chelsea.lily/" target="_blank">
        <img className="welcome__logo" width="60px" src={logoInsta} alt="instagram logo"/></a>

        <a href="https://www.paypal.com/paypalme/chelsealily" target="_blank">
        <img className="welcome__logo" width="60px" src={logoSalary} alt="paypal logo"/></a>

        </span>

      <Contact/>

      <Footer/>
  
      <ScrollToTop smooth />
    </>
  )
}

export default App
