import React from 'react';
import { AboutText } from './Text';

const About = () => {
  return(
        // <font  ="Neue Haas Grotesk Display Pro">
        // <style>
        //   c1{
        //     font-family: Neue Haas Grotesk Display Pro;
        //   }
        // </style>
        
        
    // <div class="flex-container">
    //   <div class="flex-item">
    //     <div class="flex-start">
    //       <font color="#FFFDEC">
    //                 {/* <font font-family="arial"> */}
    //                 {/* <font size="61"> */}
    //                   {/* <font weight="500"> */}
    //       <h2>Why was For Future Reference <i>created?</i></h2>
    //                 {/* </font> */}
    //                 {/* <font size="19"> */}
          
    //                   {/* <div /> */}
    //                 {/* </font> */}
    //                   {/* </font> */}
    //                 {/* </font>     */}
    //       </font> 
    //     </div>
    //     <div class="flex-item">
    //       <font color="FFFDEC">
    //         <AboutText />
    //       </font>
    //     </div>
    //   </div>
    // </div>
    <head>
    <style>
    .flex-container {
      display: flex;
      background-color: DodgerBlue;
    }

    .flex-container > div {
      background-color: #f1f1f1;
      margin: 10px;
      padding: 20px;
      font-size: 30px;
    }
    </style>
    </head>

    <body>

      <div class="flex-container">
        <div class="flex-item"><font color ="#FFFDEC">1</font></div>
        <div class="flex-item" id="special"><font color ="#FFFDEC">2</font></div>
        <div class="flex-item"><font color ="#FFFDEC">3</font></div>  
      </div>
    </body>
  );
};

export default About;

console.log(About)