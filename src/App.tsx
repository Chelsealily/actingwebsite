
import './App.scss'
import title from './assets/newlogo.jpg'
import Actingpage from './Pages/actingpage'
import Contactpage from './Pages/contactpage'
import Nav from './Components/nav'
import Homepage from './Pages/homepage'
import { HashRouter as Router, Link, Route, Routes } from "react-router-dom";
import ModelPage from './Pages/modelpage'

function App() {
    return (
    <>
        <Router>
          <br></br>
          <br></br>
        <section className="logo">
          <Link to="/">
      <div className="header">
      <img className="title__logo" width="250px" src={title} alt="Chelsea Li Official Actress website logo"/>
        <br></br>
        </div>
          </Link>
        </section>
        <Nav />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/acting" element={<Actingpage />} />
          <Route path="/modelling" element={<ModelPage/>} />
          <Route path="/contact" element={<Contactpage />} />
        </Routes>

      </Router>
    </>
  )
}

export default App
