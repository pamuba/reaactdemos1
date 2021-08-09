import './App.css';
import ClassMouse from './components/ClassMouse';
import DataFetching from './components/DataFetching';
import HookMouse from './components/HookMouse';
import MouseContainer from './components/MouseContainer';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <DataFetching></DataFetching>
      </header>
    </div>
  );
}

export default App;
