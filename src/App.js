import './styles/main.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './utils/ScrollToTop.js';

import Navbar from './Components/navbar/Navbar.js'
import Footer from './Components/footer/Footer.js';
import Home from './pages/Home.js';
import Projects from './pages/Projects.js';
import Contacts from './pages/Contacts.js';
import Project_pg from './pages/Project_pg.js';



function App() {
  return (
    <div className="App">
      <Router>
      <ScrollToTop/>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/project/:id' element={<Project_pg/>}/>
          <Route path='/contacts' element={<Contacts/>}/>
        </Routes>
        <Footer />
      </Router>    
    </div>
  );
}

export default App;
