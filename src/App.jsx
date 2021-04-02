import logo from './logo.svg';
import './App.css';
import Vista from './views/Vista.view'
import Vista2 from './views/Vista2.view'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Vista></Vista>
        <Vista2></Vista2>
      </header>
    </div>
  );
}

export default App;
