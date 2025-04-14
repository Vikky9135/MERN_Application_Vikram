import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Users from './users/pages/Users';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import NewPlace from './places/pages/NewPlace';
import MainNavigation from './shared/components/Navigation/MainNavigation';

const App = () => {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path="/" exact>
            <Users />
          </Route>
          <Route path="/places/new" exact>
            <NewPlace />
          </Route>
          <Redirect to="/" /> 
        </Switch>
      </main>
    </Router>
  );
};

export default App;
