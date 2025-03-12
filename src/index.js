import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './components/home/home';
import Outimg from './components/outimg/outimg';
import About from './components/about/about';
import Voices from './components/voices/voices';
import Start from './components/start/start';
import Cards from './components/cards/cards';
import Text from './components/text/text';
import Footer from './components/footer/footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Home />
    <Outimg />
    <About />
    <Voices />
    <Start />
    <Cards />
    <Text />
    <Footer />
  </React.StrictMode>
);