import './ugcpage.scss'
import ScrollToTop from 'react-scroll-to-top'
import Headshots from '../Components/headshots'
import Footer from '../Components/footer'
import Contact from '../Components/contact'

function Ugcpage() {
    return (
    <>
      <br></br>

      <Contact/>
      <Headshots/>
      <Footer/>
  
      <ScrollToTop smooth />
    </>
  )
}

export default Ugcpage