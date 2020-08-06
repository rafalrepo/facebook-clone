import React from 'react';
import './App.css';
import Header from './components/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <Header />
          <Route exact path="/">
            strona główna
          </Route>
          <Route path="/friends">
            friends
          </Route>
          <Route path="/watch">
            watch
          </Route>
          <Route path="/market">
            market
          </Route>
          <Route path="/group">
            group
          </Route>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
