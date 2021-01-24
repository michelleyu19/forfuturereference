/* eslint-disable react/no-array-index-key */
import React from 'react';
import { NavLink } from 'react-router-dom';
import Faq from 'react-faq-component';
import { FaqContent } from './Text';
import './HomepageStyles.scss';
import smile from '../img/smile.svg';
import heart from '../img/heart.svg';
import rightArrow from '../img/rightArrow.png';

class Application extends React.Component {
  constructor() {
    super();

    this.state = {
      welcomes: [
        { content: <p className="f61"> A tool to <i>capture</i> the present, <i>remember</i> the past, and <i>refresh</i> your outlook on the future</p> },
        { content: <p className="f36">But how? In order to prevent us from hopping on the next quick thing, for future reference not only captures but is also a reminder of the current circumstances in order to strengthen us and one another. Following a time of reflection we want to give the opportunity to give encouragement and thanks to the people who’ve helped us along the way.</p> },
      ],
      itemsToShow: 1,
      expanded: false,
    };

    this.showMore = this.showMore.bind(this);
  }

  /* eslint no-unused-expressions: ["error", { "allowTernary": true }] */
  showMore() {
    this.state.itemsToShow === 1 ? (
      this.setState({ itemsToShow: 2, expanded: true })
    ) : (
      this.setState({ itemsToShow: 1, expanded: false })
    );
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <ul>
            {this.state.welcomes.slice(0, this.state.itemsToShow).map((welcome, i) => <li key={i}>{welcome.content}</li>)}
          </ul>
        </div>
        <p>
          <a role="button" className="btn btn-primary" onClick={this.showMore} tabIndex={0}>
            {this.state.expanded ? (
              <span className="NHGT">Read Less -</span>
            ) : (
              <span className="NHGT">Read More +</span>
            )}
          </a>
        </p>
      </div>
    );
  }
}

const styles = {
  bgColor: 'clear',
  titleTextColor: 'black',
  rowTitleColor: 'black',
  arrowColor: 'black',
  rowContentPaddingLeft: '50px',
};

const config = {
  animate: true,
  arrowIcon: 'v',
};

const Homepage = () => {
  const renderWelcome = () => {
    return (
      <div id="beginning">
        <div id="welcomeTagline">
          <div>Reflect, Remember, </div>
          <div>and Repeat</div>
        </div>
        <div className="getStartedContainer">
          <a href="#startContainer" className="b">Get Started</a>
        </div>
        <div id="infoContainer">
          <Application />
        </div>
      </div>
    );
  };

  const renderReadyToStart = () => {
    return (
      <div>
        <h2 className="NHGD">Ready to Start?</h2>
        <div className="NHGT">Choose a receipient</div>

        <div className="ready">
          <div className="circle">
            <img src={smile} alt="smile" />
            <div className="circleText">
              <nav>
                <div><NavLink to="/self" exact className="b">send message to myself in the future</NavLink></div>
              </nav>
            </div>
            <img src={rightArrow} alt="rightArrow" />
          </div>
          <div className="circle2">
            <img src={heart} alt="heart" />
            <div className="circleText">
              <nav>
                <div><NavLink to="/lovedOne" className="b">send a message to a loved one</NavLink></div>
              </nav>
            </div>
            <img src={rightArrow} alt="rightArrow" />
          </div>
        </div>
      </div>
    );
  };
  const renderBlog = () => {
    return (
      <div className="blogWording">
        <font color="#FFFDEC">
          <font size="6">
            <p className="NHGD">What are others saying?</p>
          </font>
          <p className="NHGT">Check out our blog to read what other people are reflecting on during this time.</p>
          <p className="NHGT"><a href="https://readymag.com/u32406626/2058637/" className="w">Read More</a></p>
        </font>
      </div>
    );
  };
  const renderFaq = () => {
    return (
      <div className="NHGT">
        <Faq data={FaqContent} styles={styles} config={config} />
      </div>
    );
  };

  const renderContact = () => {
    return (
      <div className="NHGT">If you have any questions contact us at <u><a href="mailto:info.forfuturereference@gmail.com">info.forfuturereference@gmail.com</a></u></div>
    );
  };

  const renderFFR = () => {
    return (
      <div className="NHGT">forfuturereference2020</div>
    );
  };

  return (
    <div id="homepage">
      <div id="welcomeContainer">{renderWelcome()}</div>
      <div id="startContainer">{renderReadyToStart()}</div>
      <div id="blogContainer">{renderBlog()}</div>
      <div id="faqContainer">{renderFaq()}</div>
      <div id="contactContainer">{renderContact()}</div>
      <div id="contactContainer">{renderFFR()}</div>
    </div>
  );
};

export default Homepage;
