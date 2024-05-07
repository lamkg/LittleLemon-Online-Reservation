import React from 'react';
import './App.css';
import Nav from './components/Nav';
import MainPage from "./components/MainPage"
import Menu from './components/Menu';
import Footer from './components/Footer';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <>
      <Helmet>
        <title>My App</title>
        <meta name="description" content="This is a description of my app" />
        {/* Add more meta tags, links, scripts, etc. */}
      </Helmet>
      <Nav />
      <MainPage />
      <Menu />
      <Footer />
    </>
  );
}

export default App;
