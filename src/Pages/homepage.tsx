import './homepage.scss'
import ScrollToTop from 'react-scroll-to-top'
import title from '../assets/main/main.png'
import Nav from '../Components/nav'
import { Link } from 'react-router-dom'
import logoSalary from '../assets/payp.svg'
import Footer from '../Components/footer'
import insta from '../assets/insta.svg'


function Homepage() {
    return (
    <>
      <div className="header">
      <Link to="/">
      <img className="welcome" width="100%" src={title} alt="Chelsea Li Official Actress website logo"/>
      </Link>
        <br></br>
    <Nav/>
     <div className='paypal'>
      <a href="https://www.instagram.com/chelsea.lily" target="_blank">
        <img className="insta__logo" src={insta} alt="instagram logo"/></a>
      
         <br></br> <br></br> <br></br>
      <a href="https://www.paypal.com/paypalme/chelsealily" target="_blank">
        <img className="welcome__logo" src={logoSalary} alt="paypal logo"/></a>

        </div>
        </div>
        <Footer/>
      <ScrollToTop smooth />
    </>
  )
}

export default Homepage