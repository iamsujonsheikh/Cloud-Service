
import React from 'react'
import About from './Components/About';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import Services from './Components/Services'
import Support from './Components/Support';

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Services/>
      <About/>
      <Support/>
      <Footer/>
    </div>
  );
}

export default App;
