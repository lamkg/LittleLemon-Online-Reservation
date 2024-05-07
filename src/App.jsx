import React from 'react';
import './App.css';
import Nav from './components/Nav';
import MainPage from "./components/MainPage"
import Menu from './components/Menu';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Nav />
      <MainPage />
      <Menu />
      <Footer />
    </>
  );
}

export default App;
