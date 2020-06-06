import React from 'react';
import Header from './allthechild/Header';
import Slider from './allthechild/Slider';
import About from './allthechild/About';
import Booking from './allthechild/Booking';
import Footer from './allthechild/Footer';

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
