import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyle from './styled/GlobalStyle.js';
import Navbar from './components/NavBar.js';
import HomePage from './pages/HomePage.js';
import ResumePage from './pages/Resume.js';
import ProjectPage from './pages/ProjectPage.js';


const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/resume" element={<ResumePage />} /> {/* Add this line */}
        <Route path="/projects" element={<ProjectPage />} /> {/* Add this line */}

      </Routes>
    </Router>
  );
};

export default App;
