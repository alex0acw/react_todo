import { useDispatch } from 'react-redux';
import { HashRouter, NavLink, Redirect, Route, Switch } from 'react-router-dom';
import { getTodos } from './api/todosApi';
import './App.css';
import DoneToDoList from './components/DoneToDoList';
import NotFoundPage from './components/NotFoundPage';
import ToDoList from './components/ToDoList';
import { SET_TODOS } from './redux/actionType';
function App() {
  const dispatch = useDispatch();
  getTodos().then(({ data }) => {
    const event = {
      type: SET_TODOS,
      payload: data.reduce((prev, current) => {
        const { content, isDone: complete } = current;
        prev[current.id] = { content, complete };
        return prev
      }, {})
    }
    dispatch(event)
  });
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
            <Route exact path="/done" component={DoneToDoList} />
            <Route exact path="/todo" component={ToDoList} />
            <Redirect exact from="/" to="/todo" />
            <Route component={NotFoundPage} />
          </Switch>
        </HashRouter>
      </header>
    </div>
  );
}

export default App;
