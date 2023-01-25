import logo from './logo.svg';
import './App.css';

// button component
function MyButton() {
  return (
    <button>I'm a button</button>
  );
}

// app start
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div>
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
      </header>
    </div>
  );
}

// app export
export default App;
