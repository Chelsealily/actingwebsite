import "./footer.scss";
import logoInsta from '../assets/insta.svg'
import logoSalary from "../assets/payp.svg"
import logoPort from "../assets/pint.svg"
import logoSpot from "../assets/spot.svg"
import logoImdb from "../assets/imdb.svg"
import logocv from "../assets/CV.svg"
import cv from "../assets/cv-pdf.pdf"

const Footer = () => {

  return (
 <>
    <div className="welcome-icons">

        <a href="https://www.imdb.com/name/nm5891887/" target="_blank">
        <img className="welcome__logo" width="50px" src={logoImdb} alt="Imdb logo"/></a>

        <a href="https://app.spotlight.com/9118-3423-3884" target="_blank">
        <img className="welcome__logo" width="50px" src={logoSpot} alt="Spotlight logo"/></a>

      <a href="https://uk.pinterest.com/cbean0261/chelsea-li/?invite_code=f50a35a67c2c4d779cce7e3290f29c10&sender=1021332159153324013" target="_blank">
        <img className="welcome__logo" width="50px" src={logoPort} alt="pinterest logo"/></a>

      <a href="https://www.instagram.com/chelsea.lily/" target="_blank">
        <img className="welcome__logo" width="50px" src={logoInsta} alt="instagram logo"/></a>

      <a href={cv} target="_blank">
        <img className="welcome__logo" width="50px" src={logocv} alt="cv logo"/></a>

        <a href="https://www.paypal.com/paypalme/chelsealily" target="_blank">
        <img className="welcome__logo" width="50px" src={logoSalary} alt="paypal logo"/></a>

        </div>

    <div className="footer-container">
     Website Self-built by Chelsea Li - 2026
      </div>
</>
  );
};

export default Footer;



