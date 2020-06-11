import React from 'react';
import Header from './children/Header';
import Slider from './children/Slider';
import About from './children/About';
import Booking from './children/Booking';
import Footer from './children/Footer';

function Parentcomp() {
  return (
    <div>
      <Header />
      <Slider />
      <About />
      <Booking />
      <Footer />
    </div>
  );
}

export default Parentcomp;
