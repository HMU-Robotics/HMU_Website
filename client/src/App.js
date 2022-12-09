import { BrowserRouter as Router , Route , Routes } from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer'
import Landing from './Pages/Landing'
import Members from './Pages/Members'
import Projects from './Pages/Projects'
import Supporters from './Pages/Supporters'
import Posts from './Pages/Posts';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Landing/>}></Route>
        <Route exact path="/Home" element={<Landing/>}></Route>
        <Route exact path="/Members" element={<Members/>}></Route>
        <Route exact path="/Projects" element={<Projects/>}></Route>
        <Route exact path="/Supporters" element={<Supporters/>}></Route>
        <Route exact path="*" element={<Landing/>}></Route>
        <Route exact path="/Post/:postid" element={<Posts/>}></Route>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
