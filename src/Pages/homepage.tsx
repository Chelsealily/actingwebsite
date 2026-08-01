import './homepage.scss'
import ScrollToTop from 'react-scroll-to-top'
import Slideshow from "../Components/slideshow"
import Headshots from '../Components/headshots'
import Footer from '../Components/footer'
import Contact from '../Components/contact'

function Homepage() {
    return (
    <>
      <br></br>
      <div className="slide_container">
      <Slideshow/>
      </div>

      <Headshots/>

      

      <Contact/>

      <Footer/>
  
      <ScrollToTop smooth />
    </>
  )
}

export default Homepage