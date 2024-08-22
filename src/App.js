import React from 'react';
import Header from "./components/Header";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import About from "./components/About"
import data from "./data";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <div className="divider"></div>
      <h2 className='menu-header'>Popular Choices of the week</h2>
      <Menu items={data} />
      <About />
    </div>
  );
}

export default App;
