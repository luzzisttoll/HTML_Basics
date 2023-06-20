import React, { useState, useEffect } from 'react';
import './styles/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ScrollHandler from './components/Scrollhandler';
import ExerciseSearch from './components/ExerciseSearch';

const App = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = (newScrollPosition) => {
    setScrollPosition(newScrollPosition);
  }

  return (
    <div>
      <div className='background-container'>
        <ScrollHandler onScroll={handleScroll} />
        <div className={`text-container ${scrollPosition > 200 ? 'fixed' : ''}`}>
          <div className='title'>Die Workouthilfe</div>
        </div>
      </div>
      <div className='values'>
        <div className='text'>Unterhalb kann ausgewählt werden, für welchen Muskel Übungen angezeigt werden sollen. Für Details muss auf die Übung <b>geklickt</b> werden</div>
        <div className='search'>
          <ExerciseSearch />
        </div>
      </div>
    </div>
  );
};

export default App;

