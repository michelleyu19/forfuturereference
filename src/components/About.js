import React from 'react';
import './AboutStyles.scss';
// import cute from '../img/cute.png'; WILL REPLACE WITH NEW PHOTOS

const About = () => {
  const renderAboutText = () => {
    return (
      <div>
        <div className="flexbox-demo">
          <p className="aboutf61">Why was For Future Reference <i>created?</i></p>
          <div className="aboutf19">
            <p>For Future Reference started off as an idea between 4 friends who wanted to find a way to preserve our self reflections from the year 2020.</p>
            <p>2020 is unique because the entire world is discovering that some things are truly beyond our control. The more free time we have, the more
              time we have to think and reflect on our lives and where we’re headed towards.
            </p>
            <p>For Future Reference is a tool that helps people to reflect and treasure relationships with one another by sending out emails to oneself / loved ones into the future.</p>
          </div>
          {/* <img src={cute} alt="cute" /> */} {/* WILL REPLACE WITH NEW PHOTOS */}
        </div>
      </div>
    );
  };
  const renderFFR = () => {
    return (
      <div className="wAbout">forfuturereference2020</div>
    );
  };
  return (
    <div id="about">
      <div id="aboutTextContainer">{renderAboutText()}</div>
      <div id="aboutContactContainer">{renderFFR()}</div>
    </div>
  );
};

export default About;

console.log(About);
