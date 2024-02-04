import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Nav from './Nav';
import Lines from './Lines'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <header id='menu-container1'>
      <Nav/>
      <Lines/>
    </header>
    <section>
      <App/>
    </section>
  </div>
);
