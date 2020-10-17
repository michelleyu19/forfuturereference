/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { AboutText } from './Text';
import cute from '../img/cute.png';

// NOTE: don't need justify content in css b/c it is always centered??? << this may be a sike nah!!!

const About = () => {
  return (
    <div>
      {/* <div className="modal"> */}
      <div className="flexbox-demo">
        {/* <font color="#FFFDEC">
            <div><AboutText /></div>
          </font> */}
        {/* <font color="#000000"> */}
        {/* <div className="flexbox-second-level"> */}
        {/* <div className="item" />
              <div className="item" /> */}
        <div><AboutText /></div>
        <img src={cute} alt="cute" />
        {/* </div> */}
        {/* </font> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default About;
