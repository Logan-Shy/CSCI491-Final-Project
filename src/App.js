import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { About, Nav, Cats, Home } from './components';



const App = () => {

  return (
    <Router>
      <div className="App">
        <Nav/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" component={About} />
          <Route path="/cats" component={Cats} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
