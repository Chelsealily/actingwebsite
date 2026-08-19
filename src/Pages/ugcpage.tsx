import './ugcpage.scss'
import ScrollToTop from 'react-scroll-to-top'
import Footer from '../Components/footer'
import Contact from '../Components/contact'
import insta from '../assets/insta.svg'

function Ugcpage() {
    return (
    <>
      <br></br>
      This page is currently under construction
      For example work see my instagram
      <br></br><br></br><br></br>
      <div className='insta'>
      <a href="https://www.instagram.com/chelsealily" target="_blank">
        <img className="welcome__logo" src={insta} alt="instagram logo"/></a>
        </div>
      <Contact/>
      <Footer/>
  
      <ScrollToTop smooth />
    </>
  )
}

export default Ugcpage