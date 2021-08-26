import logo from './logo.svg';
import './App.css';
import NASA from './components/NASA';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <h1>OUR API FORM</h1>
      <form>
        <label for=""></label><br />
        <input type="text" id="" name="" />
        <input type="submit" value="Submit" />
      </form>
      <NASA />
    </div>
  );
}

export default App;
