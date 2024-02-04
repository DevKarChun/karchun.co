import React, { useState } from 'react';
import './Nav.css';

function Nav() {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (button) => {
    setSelectedButton(button);
    // Perform any other logic for button selection if needed
  };

  const handleHomeButtonClick = () => {
    // Perform the navigation logic to the existing home page
    window.location.href = 'https://example.com'; // Replace with the actual URL of home page
  };
  return (
    <div className='nav-container'>
      <button className='nav-button' onClick={handleHomeButtonClick}>
        <img className='logo' src={require('./images/K.png')} alt="karchun.co" onClick={handleHomeButtonClick} />
        <h1 className='title-main'>karchun.co</h1>
      </button>
      <div className='split-container'>
        <button
          className={`nav-button ${selectedButton === 'Portfolios' ? 'selected' : ''}`}
          onClick={() => handleButtonClick('Portfolios')}
        >
          Portfolios
        </button>
        <button
          className={`nav-button ${selectedButton === 'About' ? 'selected' : ''}`}
          onClick={() => handleButtonClick('About')}
        >
          About
        </button>
        <button
          className={`nav-button ${selectedButton === 'Experience' ? 'selected' : ''}`}
          onClick={() => handleButtonClick('Experience')}
        >
          Experience
        </button>
        <button
          className={`nav-button ${selectedButton === 'Contact' ? 'selected' : ''}`}
          onClick={() => handleButtonClick('Contact')}
        >
          Contact
        </button>
      </div>
    </div>
  );
}

export default Nav;