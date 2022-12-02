import React from 'react'
import Footer from '../components/footer/Footer';
import Navbar from '../components/navbar/Navbar';
import About from '../components/about/About';

const Home = () => {
    return (
      <>
        <Navbar />
        <About />
        <Footer/>
      </>
    );
  };

export default Home;