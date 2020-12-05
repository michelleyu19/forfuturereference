import React from 'react';
import { NavLink } from 'react-router-dom';
import Faq from 'react-faq-component';
import { FaqContent, WelcomeText } from './Text';
import './HomepageStyles.scss';

const styles = {
  bgColor: 'clear',
  titleTextColor: 'black',
  rowTitleColor: 'black',
  // rowContentColor: 'grey',
  arrowColor: 'white',
};

const Homepage = () => {
  const renderWelcome = () => {
    return (
      <div id="welcomeTagline">
        <div>Reflect, Remember, </div>
        <div>and Repeat</div>
      </div>
    );
  };
  const renderInfo = () => {
    return (
      <WelcomeText />
    );
  };

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
    );
  };
  const renderBlog = () => {
    return (
      <div>
        What are others saying?
        <p>Check out our blog to read what other people are reflecting on during this time.</p>
        <p>Read More</p>
      </div>
    );
  };
  const renderFaq = () => {
    return (
      <div>
        <Faq data={FaqContent} styles={styles} />
      </div>
    // >>>>>>> 6ee2988d737ad030cfff6eb397c29af0b67dada0
    );
  };
  return (
    <div id="homepage">
      <div id="welcomeContainer">{renderWelcome()}</div>
      <div className="curved" id="infoContainer">{renderInfo()}</div>
      <div id="startContainer">{renderReadyToStart()}</div>
      <div id="blogContainer">{renderBlog()}</div>
      <div id="faqContainer">{renderFaq()}</div>
    </div>
  );
};

export default Homepage;
