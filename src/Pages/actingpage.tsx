import './homepage.scss'
import ScrollToTop from 'react-scroll-to-top'
import Headshots from '../Components/headshots'
import Footer from '../Components/footer'
import About from '../Components/about'

function Contactpage() {
    return (
    <>
      <br></br>

      <About/>
      <Headshots/>
      <Footer/>
  
      <ScrollToTop smooth />
    </>
  )
}

export default Contactpage