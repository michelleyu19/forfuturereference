import React from 'react';
import { NavLink } from 'react-router-dom';
import Faq from 'react-faq-component';
import { FaqContent, WelcomeText } from './Text';
// import { FaqContent } from './Text';
import './HomepageStyles.scss';
// import circlesOverlapping from '../img/circlesOverlapping.png';

const styles = {
  bgColor: 'clear',
  titleTextColor: 'black',
  rowTitleColor: 'black',
  // rowContentColor: 'grey',
  arrowColor: 'white',
  // rowContentPaddingLeft: '500px',
  // titleContentPaddingLeft: '500px',
};

const Homepage = () => {
  const renderWelcome = () => {
    return (
      <div id="beginning">
        <div id="welcomeTagline">
          <div>Reflect, Remember, </div>
          <div>and Repeat.</div>
        </div>
        <div id="getStartedContainer">
          <div>Get Started</div>
        </div>
        <div id="infoContainer">
          <div><font size="7"><WelcomeText /></font></div>
        </div>
      </div>

    );
  };

  // const Homepage = () => {
  // const renderWelcome = () => {
  //   return (
  //     <div id="beginning">
  //       <div id="welcomeTagline">
  //         <div>Reflect, Remember, </div>
  //         <div>and Repeat.</div>
  //       </div>
  //       <div className="button">Get Started</div>
  //       {/* <div><font size="7"><WelcomeText /></font></div> */}
  //     </div>
  //   );
  // };

  // const renderGetStarted = () => {
  //   return (
  //     <div>Get Started
  //       <div><WelcomeText /></div>
  //     </div>

  //   );
  // };

  // const renderInfo = () => {
  //   return (
  //     <WelcomeText />
  //   );
  // };

  // <<<<<<< HEAD
  //   render() {
  //     // { /* const renderIntro = () => {
  //     //     return (
  //     //       <font color="#FFFDEC">
  //     //     <div>
  //     //       <h2>What is for future reference?</h2>
  //     //       <WelcomeText />
  //     //       <div />
  //     //     </div>
  //     //   </font>
  //     //     );
  //     //   }; */ }
  //     const renderIntro = () => {
  //       return (
  // <<<<<<< Updated upstream
  //         <div>

  //           <div><WelcomeText /></div>
  //           {/* <div className="modal"> */}
  //           <div className="flexbox-boxes">
  //             <div className="item-black" />
  //             <div className="item-white" />
  //             <div className="item-black" />
  //             <div className="item-white" />
  //           </div>
  //         </div>
  //         // </div>

  // =======
  //         <font color = "#FFFDEC">
  //           <div>
  //             <h2>What is for future reference?</h2>
  //             <WelcomeText />
  //             <div />
  //           </div>
  //         </font>
  // >>>>>>> Stashed changes
  //       );
  //     };
  //     const renderReadyToTry = () => {
  //       return (
  // <<<<<<< Updated upstream
  //         <font color="#FFFDEC">
  // =======
  //         <font color = "#FFFDEC">
  // >>>>>>> Stashed changes
  //           <div>
  //             <h2>Ready to Try?</h2>
  //             <div>
  //               <nav>
  //                 <ul style={{ listStyleType: 'none' }}>
  //                   <li><NavLink to="/self" exact>Send a Message to My Future Self</NavLink></li>
  //                   <li><NavLink to="/lovedOne">Send a Message to a Loved One</NavLink></li>
  //                 </ul>
  //               </nav>
  //             </div>
  //           </div>
  //         </font>
  //       );
  //     };
  //     return (
  // <<<<<<< Updated upstream
  //       <font color="#FFFDEC">
  // =======
  //       <font color = "#FFFDEC">
  // >>>>>>> Stashed changes
  //         <div>
  //           <h1>For Future Reference</h1>
  //           {renderIntro()}
  //           {renderReadyToTry()}
  //         </div>
  //       </font>
  // =======
  const renderReadyToStart = () => {
    return (
      <div>
        <h2>Ready to Start?</h2>
        <div>Choose a receipient</div>
        <div id="ready">
          <nav>
            <ul style={{ listStyleType: 'none' }}>
              <div className="circle">
                <li><NavLink to="/self" exact>Send a Message to My Future Self</NavLink></li>
              </div>
              <div className="circle2">
                <li><NavLink to="/lovedOne">Send a Message to a Loved One</NavLink></li>
              </div>
            </ul>
          </nav>
        </div>
      </div>

    );
  };
  const renderBlog = () => {
    return (
      <div>
        <font color="#FFFDEC">
          <font size="6">
            <p>What are others saying?</p>
          </font>
          <p>Check out our blog to read what other people are reflecting on during this time.</p>
          {/* <li><NavLink to="/self" exact>Send a Message to My Future Self</NavLink></li>      */}
          <u>Read More</u>
        </font>
        {/* <img src={circlesOverlapping} alt="circlesOverlapping" width="200" height="200" /> */}
      </div>
    );
  };
  const renderFaq = () => {
    return (
      <div>
        <Faq data={FaqContent} styles={styles} />
      </div>

    // render() {
    //   const renderIntro = () => {
    //     return (
    //       <font color = "#FFFDEC">
    //         <div>
    //           <h2>What is for future reference?</h2>
    //           <WelcomeText />
    //           <div />
    //         </div>
    //       </font>
    //     );
    //   };
    //   const renderReadyToTry = () => {
    //     return (
    //       <font color = "#FFFDEC">
    //         <div>
    //           <h2>Ready to Try?</h2>
    //           <div>
    //             <nav>
    //               <ul style={{ listStyleType: 'none' }}>
    //                 <li><NavLink to="/self" exact>Send a Message to My Future Self</NavLink></li>
    //                 <li><NavLink to="/lovedOne">Send a Message to a Loved One</NavLink></li>
    //               </ul>
    //             </nav>
    //           </div>
    //         </div>
    //       </font>
    //     );
    //   };
    //   return (
    //     <font color = "#FFFDEC">
    //       <div>
    //         <h1>For Future Reference</h1>
    //         {renderIntro()}
    //         {renderReadyToTry()}
    //       </div>
    //     </font>
    );
  };

  const renderContact = () => {
    return (
      <div>If you have any questions contact us at <u>info.forfuturereference@gmail.com</u></div>
    );
  };

  return (
    <div id="homepage">
      <div id="welcomeContainer">{renderWelcome()}</div>
      {/* <div id="getStartedButton">{renderGetStarted()}</div> */}
      {/* <div className="curved" id="infoContainer">{renderInfo()}</div> */}
      {/* <div id="infoContainer">{renderInfo()}</div> */}
      <div id="startContainer">{renderReadyToStart()}</div>
      <div id="blogContainer">{renderBlog()}</div>
      <div id="faqContainer">{renderFaq()}</div>
      <div id="contactContainer">{renderContact()}</div>
    </div>
  );
};

export default Homepage;
