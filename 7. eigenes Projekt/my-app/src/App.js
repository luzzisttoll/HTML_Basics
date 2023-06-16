// App.js
import React, { useState, useEffect } from 'react';
import './styles/style.css';

const App = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const newScrollPosition = window.pageYOffset;
      setScrollPosition(newScrollPosition);

      if (newScrollPosition > 100) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <div className='background-container'>
        <div className={`text-container ${isFixed > 0 ? 'fixed' : ''}`}>
          <h1>Die Workouthilfe</h1>
        </div>
      </div>
      <div>
        <p>Est amet cupidatat laborum pariatur sint minim enim esse elit elit eiusmod. Proident eu nulla velit laboris. Laboris do minim incididunt dolore amet. Duis cupidatat et enim ut dolor elit in quis incididunt exercitation id. Voluptate occaecat amet culpa anim exercitation nisi nisi ea nisi officia nostrud est incididunt consequat. Elit Lorem aliquip veniam non occaecat commodo enim tempor nostrud.</p>
      </div>
    </div>
  );
};

export default App;