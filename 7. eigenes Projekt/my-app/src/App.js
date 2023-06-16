import React, { useState, useEffect } from 'react';
import './styles/style.css';
import ScrollHandler from './components/Scrollhandler';

const App = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = (newScrollPosition) => {
    setScrollPosition(newScrollPosition);
  }

  return (
    <div>
        <div className='background-container'>
          <ScrollHandler onScroll={handleScroll} />
          <div className={`text-container ${scrollPosition > 260 ? 'fixed' : ''}`}>
            <div className='title'>Die Workouthilfe</div>
          </div>
        </div>
      <div className='text'>
        <p>Est amet cupidatat laborum pariatur sint minim enim esse elit elit eiusmod. <br></br>Proident eu nulla velit laboris. <br></br>Laboris do minim incididunt dolore amet. <br></br>Duis cupidatat et enim ut dolor elit in quis incididunt exercitation id. <br></br>Voluptate occaecat amet culpa anim exercitation nisi nisi ea nisi officia nostrud est incididunt consequat. <br></br>Elit Lorem aliquip veniam non occaecat commodo enim tempor nostrud.</p>
        <p>Est amet cupidatat laborum pariatur sint minim enim esse elit elit eiusmod. <br></br>Proident eu nulla velit laboris. <br></br>Laboris do minim incididunt dolore amet. <br></br>Duis cupidatat et enim ut dolor elit in quis incididunt exercitation id. <br></br>Voluptate occaecat amet culpa anim exercitation nisi nisi ea nisi officia nostrud est incididunt consequat. <br></br>Elit Lorem aliquip veniam non occaecat commodo enim tempor nostrud.</p>
        <p>Est amet cupidatat laborum pariatur sint minim enim esse elit elit eiusmod. <br></br>Proident eu nulla velit laboris. <br></br>Laboris do minim incididunt dolore amet. <br></br>Duis cupidatat et enim ut dolor elit in quis incididunt exercitation id. <br></br>Voluptate occaecat amet culpa anim exercitation nisi nisi ea nisi officia nostrud est incididunt consequat. <br></br>Elit Lorem aliquip veniam non occaecat commodo enim tempor nostrud.</p>
        <p>Est amet cupidatat laborum pariatur sint minim enim esse elit elit eiusmod. <br></br>Proident eu nulla velit laboris. <br></br>Laboris do minim incididunt dolore amet. <br></br>Duis cupidatat et enim ut dolor elit in quis incididunt exercitation id. <br></br>Voluptate occaecat amet culpa anim exercitation nisi nisi ea nisi officia nostrud est incididunt consequat. <br></br>Elit Lorem aliquip veniam non occaecat commodo enim tempor nostrud.</p>
        <p>Est amet cupidatat laborum pariatur sint minim enim esse elit elit eiusmod. <br></br>Proident eu nulla velit laboris. <br></br>Laboris do minim incididunt dolore amet. <br></br>Duis cupidatat et enim ut dolor elit in quis incididunt exercitation id. <br></br>Voluptate occaecat amet culpa anim exercitation nisi nisi ea nisi officia nostrud est incididunt consequat. <br></br>Elit Lorem aliquip veniam non occaecat commodo enim tempor nostrud.</p>
      </div>
    </div>
  );
};

export default App;