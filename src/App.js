import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Signin from './pages/Signin';
import Home from './pages/Home';
import Book from './pages/Book';
import Error from './pages/Error';
import Add from './pages/Add';
import { ConnectedRouter } from 'connected-react-router';
import { history } from './store';

function App() {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/signin" exact component={Signin} />
        <Route path="/book/:bookId" exact component={Book} />
        <Route path="/add" exact component={Add} />
        <Route path="/" exact component={Home} />
        <Route component={Error} />
      </Switch>
    </ConnectedRouter>
  );
}

export default App;
