import './App.css';
import HookCounter from './components/HookCounter';
import HookCounterTwo from './components/HookCounterTwo';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HookCounter></HookCounter>
        <HookCounterTwo></HookCounterTwo>
      </header>
    </div>
  );
}

export default App;
