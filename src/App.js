import { HashRouter, NavLink, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import DoneToDoList from './components/DoneToDoList';
import NotFoundPage from './components/NotFoundPage';
import ToDoList from './components/ToDoList';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HashRouter>
          <ul id="path-list">
            <li>
              <NavLink to="/todo">TODO List</NavLink>
            </li>
            <li>
              <NavLink to="/done">Done TODO List</NavLink>
            </li>
          </ul>
          <Switch>
            <Route path="/done" component={DoneToDoList} />
            <Route path="/todo" component={ToDoList} />
            <Redirect exact from="/" to="/todo" />
            <Route component={NotFoundPage} />
          </Switch>
        </HashRouter>
      </header>
    </div>
  );
}

export default App;
