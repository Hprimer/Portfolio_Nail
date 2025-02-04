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
          <Route path='/Portfolio_Nail' element={<Home/>}/>
          <Route path='/Portfolio_Nail/projects' element={<Projects/>}/>
          <Route path='/Portfolio_Nail/projects/:id' element={<Project_pg/>}/>
          <Route path='/Portfolio_Nail/contacts' element={<Contacts/>}/>
        </Routes>
        <Footer />
      </Router>    
    </div>
  );
}

export default App;
