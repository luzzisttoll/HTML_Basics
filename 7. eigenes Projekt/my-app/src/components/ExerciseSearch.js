import React, { useState, useEffect } from 'react';

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
      <select onChange={handleSearch}>
        <option>Please select...</option>
        <option value={"triceps"}>Triceps</option>
        <option value={"biceps"}>Bizeps</option>
      </select>
      {data.length > 0 ? (
        <ul>
          {data.map(exercise => (
            <li key={exercise.id}>{exercise.name} + {exercise.difficulty} + {exercise.muscle}</li>
          ))}
        </ul>
      ) : (
        'No exercises found.'
      )}
    </div>
  );
}

export default App;
