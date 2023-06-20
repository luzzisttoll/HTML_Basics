import React, { useState, useEffect } from 'react';
import '../styles/style.css';

function App() {
  const [data, setData] = useState([]);
  const [selectedExerciseIsOpen, setSelectedExerciseIsOpen] = useState(null);

  useEffect(() => {

  }, []);

  const handleSearch = event => {
    const searchTerm = event.target.value;
    if (!searchTerm) {
      return;
    }

    fetch('https://api.api-ninjas.com/v1/exercises?muscle=' + searchTerm, {
      headers: {
        'X-Api-Key': '0OYDidzDI/O9S2U8efeDSA==vfqX55xOhxT87DFp'
      }
    })
      .then(response => response.json())
      .then(json => {
        setData(json);
      })
      .catch(error => console.error(error));
  };

  const openPopup = exercise => {
    setSelectedExerciseIsOpen(exercise);
  };

  const closePopup = () => {
    setSelectedExerciseIsOpen(null);
  };

  return (
    <div>
      <div className='select'>
        <select className='custom-select' onChange={handleSearch} required>
          <option selected disabled>Select Muscle...</option>
          <option value='abdominals'>Abdominals</option>
          <option value='abductors'>Abductors</option>
          <option value='adductors'>Adductors</option>
          <option value='biceps'>Biceps</option>
          <option value='calves'>Calves</option>
          <option value='chest'>Chest</option>
          <option value='forearms'>Forearms</option>
          <option value='glutes'>Glutes</option>
          <option value='hamstrings'>Hamstrings</option>
          <option value='lats'>Lats</option>
          <option value='lower_back'>Lower Back</option>
          <option value='middle_back'>Middle Back</option>
          <option value='neck'>Neck</option>
          <option value='quadriceps'>Quadriceps</option>
          <option value='traps'>Traps</option>
          <option value='triceps'>Triceps</option>
        </select>
        <span className='select-icon'></span>
      </div>

      {data.length > 0 ? (
        <ul>
          {data.map(exercise => (
            <span key={exercise.id}>
              <p>{exercise.name}</p>
              <button onClick={() => openPopup(exercise)}>Open Popup</button>
            </span>
          ))}
        </ul>
      ) : (
        <p>Choose a muscle to display the exercises.</p>
      )}

      {selectedExerciseIsOpen && (
        <div className='popup'>
          <div className='popup-content'>
            <h2>{selectedExerciseIsOpen.name}</h2>
            <p>{selectedExerciseIsOpen.type} + {selectedExerciseIsOpen.muscle} + {selectedExerciseIsOpen.difficulty}</p>
            <p>{selectedExerciseIsOpen.instructions}</p>
            <button onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
