import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Skills from './components/Skills';
import Experience from './components/Experience';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Project />
      <Skills/>
      <Experience/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;