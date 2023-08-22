import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Landing from './Pages/Landing';
import Members from './Pages/Members';
import Supporters from './Pages/Supporters';
import Posts from './Pages/Posts';
// import Eurobot from './Pages/Eurobot'
import { LanguageProvider } from './hooks/LanguageContext'; 

function App() {
  return (
    <Router>
      <LanguageProvider> 
        <Header />
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/Members" element={<Members />} />
          <Route exact path="/Supporters" element={<Supporters />} />
          {/* <Route exact path="/Eurobot" element={<Eurobot />}/> */}
          <Route exact path="*" element={<Landing />} />
          <Route exact path="/Post/:postid" element={<Posts />} />
        </Routes>
        <Footer />
      </LanguageProvider>
    </Router>
  );
}

export default App;
