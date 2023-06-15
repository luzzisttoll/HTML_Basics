import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import Liste from './components/Liste';

function App() {
  return ( 
    <div className="App">
      <header className="App-header">
        <Button name="Hans" age="17"/>
        <Liste name="Coffee"/>
        <Liste name="Tea"/>
        <Liste name="Beer"/>
      </header>
    </div>
  );
}

export default App;
