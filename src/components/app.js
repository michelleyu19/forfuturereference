import React from 'react';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import About from './About';
import Homepage from './Homepage';
import LovedOneResponsePage from './LovedOneResponsePage';
import NavBar from './NavBar';
import SelfResponsePage from './SelfResponsePage';

const FallBack = (props) => {
  return <div>URL Not Found</div>;
};
const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/about" component={About} />
          <Route path="/self" component={SelfResponsePage} />
          <Route path="/lovedOne" component={LovedOneResponsePage} />
          <Route component={FallBack} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
