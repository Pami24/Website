import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Programs from './components/Programs';
import Resources from './components/Resources';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div style={{ backgroundColor: '#9abed6' }}> {/* Change the color code as needed */}
      <Navbar />
      <Home />
      <About />
      <Programs />
      <Resources />
    
      <Footer />
    </div>
  );
}

export default App;
