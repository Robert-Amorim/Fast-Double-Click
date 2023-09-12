import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainPage from './pages/MainPage';
import RecordsPage from './pages/RecordsPage';

function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ MainPage } />
          <Route exact path="/records" component={ RecordsPage } />
        </Switch>
    </BrowserRouter>
  );
}

export default App;