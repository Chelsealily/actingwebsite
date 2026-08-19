import './techpage.scss'
import ScrollToTop from 'react-scroll-to-top'
import logoPort from '../assets/pint.svg'

function Techpage() {
    return (
    <>
      <br></br>
      <div className='text'>

      " This page is currently under construction " <br></br>
      For my current modelling portfolio checkout my pinterest board<br></br><br></br>
      <a href="https://uk.pinterest.com/cbean0261/chelsea-li/?invite_code=f50a35a67c2c4d779cce7e3290f29c10&sender=1021332159153324013" target="_blank">
        <img className="welcome__logo" width="50px" src={logoPort} alt="pinterest logo"/></a>

      </div>
  
      <ScrollToTop smooth />
    </>
  )
}

export default Techpage