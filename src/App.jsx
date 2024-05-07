import React from 'react';
import './App.css';
import Nav from './components/Nav';
import MainPage from "./components/MainPage"
import Menu from './components/Menu';
import Footer from './components/Footer';
import { Helmet } from 'react-helmet';
import Logo from './assets/Logo.svg';

function App() {
  return (
    <>
      <Helmet>
        <meta name="og:title" content="Little Lemon Rstaurant Online Reservation Page" />
        <meta name="og:description" content="A reservation page for the Little Lemon Restaurant" />
        <meta name='og:image' content={Logo}/>
        <meta name="language" content="english" />
        <meta name="rating" content="safe for kids" />
        <meta name="format-detection" content="telephone=yes" />
        <meta name="HandheldFriendly" content="true" />
      </Helmet>
      <Nav />
      <MainPage />
      <Menu />
      <Footer />
    </>
  );
}

export default App;
