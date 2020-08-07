import React from 'react';
import './App.css';
import Header from './components/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import SiedbarHomeLeft from './components/SiedbarHomeLeft';
import SiedbarHomeCenter from './components/SiedbarHomeCenter';
import SiedbarHomeRight from './components/SiedbarHomeRight';


function App() {
  return (
    <Router>
        <div className="App">
          <Header />
            <div className="wrapper">
              <Switch>
                <Route exact path="/">
                    <SiedbarHomeLeft />
                    <SiedbarHomeCenter />
                    <SiedbarHomeRight />
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
              </Switch>
            </div>
        </div>
    </Router>
  );
}

export default App;
