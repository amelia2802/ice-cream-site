import React from 'react';
import Header from "./components/Header";
import Hero from "./components/Hero";
import Offers from "./components/Offers"
import Menu from "./components/Menu";
import About from "./components/About";
import Testimonials from './components/Testimonials';
import Footer from "./components/Footer";
import data from "./data";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <div className="divider"></div>
      <Offers />
      <h2 id='product' className='menu-header'>Popular Choices of the week</h2>
      <Menu items={data} />
      <About />
      <Testimonials />
      <div className="divider-2"></div>
      <Footer />
    </div>
  );
}

export default App;
