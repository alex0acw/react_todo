import { useDispatch } from 'react-redux';
import { HashRouter, NavLink, Redirect, Route, Switch } from 'react-router-dom';
import { getTodos } from './api/todosApi';
import DoneToDoList from './components/DoneToDoList';
import NotFoundPage from './components/NotFoundPage';
import ToDoList from './components/ToDoList';
import { SET_TODOS } from './redux/actionType';
import './App.css';
import { Button } from 'antd';

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
      <body>
        <HashRouter>
          <div id="path-buttons">
            <Button><NavLink to="/todo">TODO List</NavLink></Button>
            <Button>
              <NavLink to="/done">Done TODO List</NavLink></Button>
          </div>
          <Switch>
            <Route exact path="/done" component={DoneToDoList} />
            <Route exact path="/todo" component={ToDoList} />
            <Redirect exact from="/" to="/todo" />
            <Route component={NotFoundPage} />
          </Switch>
        </HashRouter>
      </body>
    </div>
  );
}

export default App;
