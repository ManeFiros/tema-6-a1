import logo from './logo.svg';
import './App.css';
import Vista from './views/Vista.view'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Vista></Vista>
      </header>
    </div>
  );
}

export default App;
