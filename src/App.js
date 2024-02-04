import React from 'react';
import './App.css';
import mainimg from './images/background.png';

function App() {
  return (
    <div className='app-container'>
           <div className='text-container'>
              <h2 className='greeting'>Hello<span className='dot'>.</span></h2>
              <h3 className='name'><span className='horizontal-line'></span>I'm Christopher Wong</h3>
              <h3>Professional Software Developer<span className='dot'> .</span></h3>
              <button className='dwncv'>Download CV</button>
            </div>
        <div className='image-box'>
          <img className='mainimg' height="200px" src={mainimg} alt="karchun.co" />
          </div>
    </div>
  );
}

export default App;
