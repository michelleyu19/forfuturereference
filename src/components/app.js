import React from 'react';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import About from './About';
import Homepage from './Homepage';
import LovedOneResponsePage from './LovedOneResponsePage';
import MessageSentPage from './MessageSentPage';
import NavBar from './NavBar';
import SelfResponsePage from './SelfResponsePage';

const FallBack = (props) => {
  return <div>URL Not Found</div>;
};
const App = () => {
  return (
    <Router>
      <NavBar />
      <Switch id="pageComponent">
        <Route exact path="/" component={Homepage} />
        <Route path="/about" component={About} />
        <Route path="/self" component={SelfResponsePage} />
        <Route path="/lovedOne" component={LovedOneResponsePage} />
        <Route path="/sent" component={MessageSentPage} />
        <Route component={FallBack} />
      </Switch>
    </Router>
  );
};

export default App;
