import './App.scss'
import ScrollToTop from 'react-scroll-to-top'
import logoInsta from './assets/instagram.png'
import logoSalary from "./assets/coin.png"

function App() {
  return (
    <>
      <div className="header">
      <h1>CHELSEA LI</h1>

      <p className="welcome">      
        London Based Actress
        <br></br>
        <br></br>
        <div className="welcome-icons">
      <a href="https://www.instagram.com/chelsea.lily/" target="_blank">
        <img className="welcome__logo" width="30px" src={logoInsta} alt="instagram logo"/></a>

        <a href="https://www.paypal.com/paypalme/chelsealily" target="_blank">
        <img className="welcome__logo" width="30px" src={logoSalary} alt="paypal logo"/></a>
        </div>
      </p>
      
      </div>
     
      <div className="btn-group">
      <a href="https://uk.pinterest.com/cbean0261/chelsea-li/?invite_code=f50a35a67c2c4d779cce7e3290f29c10&sender=1021332159153324013"><button>Portfolio</button></a>
      <a href="https://www.imdb.com/name/nm5891887/"><button>Imdb</button></a>
      <a href="https://app.spotlight.com/9118-3423-3884"><button>Spotlight</button></a>
      <a href="https://www.sandrareynolds.co.uk/model/chelsea-li"><button>Sandra Reynolds</button></a>
      <a href="https://www.roctalentagency.com/commercial-women/chelsea"><button>Roc Talent</button></a>
      </div>

  
      <ScrollToTop smooth />
    </>
  )
}

export default App
