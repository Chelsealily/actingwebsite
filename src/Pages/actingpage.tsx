import './homepage.scss'
import ScrollToTop from 'react-scroll-to-top'
import Headshots from '../Components/headshots'
import Footer from '../Components/footer'
import About from '../Components/about'
import inb from '../assets/welcomepic/inb.png'

function Contactpage() {
    return (
    <>
      <br></br>
     <img width="80%" src={inb} alt="Chelsea Li in comedy film - The inbetweeners 2 movie"/>
      <About/>
      <Headshots/>
      <Footer/>
  
      <ScrollToTop smooth />
    </>
  )
}

export default Contactpage