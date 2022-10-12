import { BrowserRouter as Router , Route , Routes } from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer'
import About from './Pages/About'
import Gallery from './Pages/Gallery'
import Landing from './Pages/Landing'
import Members from './Pages/Members'
import OnBoarding from './Pages/OnBoarding'
import Projects from './Pages/Projects'
import Supporters from './Pages/Supporters'

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Landing/>}></Route>
        <Route exact path="/About" element={<About/>}></Route>
        <Route exact path="/Gallery" element={<Gallery/>}></Route>
        <Route exact path="/Members" element={<Members/>}></Route>
        <Route exact path="/OnBoarding" element={<OnBoarding/>}></Route>
        <Route exact path="/Projects" element={<Projects/>}></Route>
        <Route exact path="/Supporters" element={<Supporters/>}></Route>
        <Route exact path="*" element={<Landing/>}></Route>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
