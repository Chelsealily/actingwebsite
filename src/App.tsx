
import './App.scss'
import Actingpage from './Pages/actingpage'
import Homepage from './Pages/homepage'
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import ModelPage from './Pages/modelpage'
import Ugcpage from './Pages/ugcpage'
import Techpage from './Pages/techpage';

function App() {
    return (
    <>
        <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/acting" element={<Actingpage />} />
          <Route path="/modelling" element={<ModelPage/>} />
          <Route path="/ugc" element={<Ugcpage/>} />
          <Route path="/tech" element={<Techpage/>} />
          <Route path="/contact" element={<Ugcpage/>} />
        </Routes>

      </Router>
    </>
  )
}

export default App
