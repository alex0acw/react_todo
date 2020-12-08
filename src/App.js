import './App.css';
import ToDoGeneratorContainer from './containers/ToDoGeneratorContainer';
import ToDoGroupContainer from './containers/ToDoGroupContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ToDoGroupContainer/>
        <ToDoGeneratorContainer/>
      </header>
    </div>
  );
}

export default App;
