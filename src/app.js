import React from 'react';
import { Link, Route, Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import Books from './components/Books';
import Categories from './components/Categories';
import store from './store';

const App = () => {
 return (
    <Provider store={store}>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/categories">Categories</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Books} />
        <Route path="/categories" component={Categories} />
      </Router>
    </Provider>
 );
};

export default App;