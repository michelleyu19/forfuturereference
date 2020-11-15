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
    // { /* const renderIntro = () => {
    //     return (
    //       <font color="#FFFDEC">
    //     <div>
    //       <h2>What is for future reference?</h2>
    //       <WelcomeText />
    //       <div />
    //     </div>
    //   </font>
    //     );
    //   }; */ }
    const renderIntro = () => {
      return (
<<<<<<< Updated upstream
        <div>

          <div><WelcomeText /></div>
          {/* <div className="modal"> */}
          <div className="flexbox-boxes">
            <div className="item-black" />
            <div className="item-white" />
            <div className="item-black" />
            <div className="item-white" />
          </div>
        </div>
        // </div>

=======
        <font color = "#FFFDEC">
          <div>
            <h2>What is for future reference?</h2>
            <WelcomeText />
            <div />
          </div>
        </font>
>>>>>>> Stashed changes
      );
    };
    const renderReadyToTry = () => {
      return (
<<<<<<< Updated upstream
        <font color="#FFFDEC">
=======
        <font color = "#FFFDEC">
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
      <font color="#FFFDEC">
=======
      <font color = "#FFFDEC">
>>>>>>> Stashed changes
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
