import React from 'react';
import './App.css';
import Nav from './components/Nav';
import MainPage from "./components/MainPage"
import Menu from './components/Menu';
import Footer from './components/Footer';
import MetaTags from './components/MetaTags';


function App() {
  return (
    <>
      <MetaTags />
      <Nav />
      <MainPage />
      <Menu />
      <Footer />
    </>
  );
}

export default App;
