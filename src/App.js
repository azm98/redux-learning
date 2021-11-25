import logo from './logo.svg';
import './App.css';
import Post from './components/post'
import PostForm from './components/postform';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Comments from './components/comments';
import store from './store'


function App() {
  return (
    <Provider store={store}>
      <Router>
      <div className="App">
        <header className="App-header">
          
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
        <ul>
          <li><Link to={'/comments'}>Comments</Link></li>
        </ul>
        <Switch>
          <Route exact path='/comments' component={Comments}/>
        </Switch>
        <PostForm />
        <hr />
        <Post />
      </div>
      </Router>
    </Provider>
  );
}

export default App;
