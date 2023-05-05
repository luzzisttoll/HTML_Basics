import logo from './logo.svg';
import './App.css';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button name="Hans" age="17"/>
        <Button name="Sepp" age="12"/>
        <Button name="Paul" age="80"/>
        hello
      </header>
    </div>
  );
}

export default App;
