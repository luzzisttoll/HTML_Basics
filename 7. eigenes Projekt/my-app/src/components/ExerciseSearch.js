import React, { useState, useEffect } from 'react';
import '../styles/style.css'

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {

  }, []);

  const handleSearch = event => {
    const searchTerm = event.target.value
    if (!searchTerm) {
      return
    }
    console.log('https://api.api-ninjas.com/v1/exercises?muscle=' + searchTerm)
    fetch('https://api.api-ninjas.com/v1/exercises?muscle=' + searchTerm, {
      headers: {
        'X-Api-Key': '0OYDidzDI/O9S2U8efeDSA==vfqX55xOhxT87DFp'
      }
    })
      .then(response => response.json())
      .then(json => {
        setData(json)
      })
      .catch(error => console.error(error));
  };

  return (
    <div>
      <div className='select'>
        <select className='custom-select' onChange={handleSearch} required>
          <option>Select Muscle...</option>
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
              <p key={exercise.id}>{exercise.name} - {exercise.muscle}</p>
            ))}
          </ul>
      ) : (
        '  Choose a muscle to display the exercise.'
      )}
    </div>
  );
}

export default App;
