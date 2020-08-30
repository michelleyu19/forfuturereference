import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { WelcomeText } from './Text';

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const renderIntro = () => {
      return (
        <font color = "#FFFDEC">
          <div>
            <h2>What is for future reference?</h2>
            <WelcomeText />
            <div />
          </div>
        </font>
      );
    };
    const renderReadyToTry = () => {
      return (
        <font color = "#FFFDEC">
          <div>
            <h2>Ready to Try?</h2>
            <div>
              <nav>
                <ul style={{ listStyleType: 'none' }}>
                  <li><NavLink to="/self" exact>Send a Message to My Future Self</NavLink></li>
                  <li><NavLink to="/lovedOne">Send a Message to a Loved One</NavLink></li>
                </ul>
              </nav>
            </div>
          </div>
        </font>
      );
    };
    return (
      <font color = "#FFFDEC">
        <div>
          <h1>For Future Reference</h1>
          {renderIntro()}
          {renderReadyToTry()}
        </div>
      </font>
    );
  }
}

export default Homepage;
