import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('https://api.api-ninjas.com/v1/exercises', {
      headers: {
        'X-Api-Key': '0OYDidzDI/O9S2U8efeDSA==vfqX55xOhxT87DFp'
      }
    })
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error));
  }, []);

  const handleSearch = event => {
    setSearchTerm(event.target.value);
  };

  console.log(data);

  const filteredExercises = data
    ? data.filter(exercise => {
        const muscles = exercise.muscles || ''; // Handle undefined or null muscles
        return muscles.toLowerCase().includes(searchTerm.toLowerCase());
      })
    : [];

  return (
    <div>
      <input
        type="text"
        placeholder="Search by muscle"
        value={searchTerm}
        onChange={handleSearch}
      />
      {filteredExercises.length > 0 ? (
        <ul>
          {filteredExercises.map(exercise => (
            <li key={exercise.id}>{exercise.name}</li>
          ))}
        </ul>
      ) : (
        'No exercises found.'
      )}
    </div>
  );
}

export default App;
