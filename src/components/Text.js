/* eslint-disable react/jsx-indent */
import React from 'react';

// Homepage About Text
export const WelcomeText = () => {
  return (
    // <div>
    //   <div>
    //     <p>in the pace of this world, we sometimes struggle to keep up especially in times (Covid, economy, BLM) understanding this is our natural instinct to keep up w the pace,
    //     we wanted to provide a tool to be able to capture a certain moment(takeaways, influences, thoughts )
    //     </p>
    //     <p>But how? In order to prevent us from hopping on the next quick thing,
    //     for future reference not only captures but is also a reminder of the current circumstances in order to strengthen us and one another.
    //     Following a time of reflection we want to give the opportunity to give encouragement and thanks to the people who’ve helped us along the way.
    //     </p>
    //   </div>
    // </div>
    <div>
      <div>
        <font size="7">
          <p><i>Reflect</i>, Remember, and <i>Repeat</i>.
          </p>
        </font>
        <font size="3">
          <p>A tool to <i>capture</i> the present, <i>remember</i> the past, and to <i>refresh</i> your outlook on the future.
          </p>
        </font>
      </div>
    </div>
  );
};

export const otherText = () => {
  return (
    <div>
      example
    </div>
  );
};

// Self Reflection Questions
const q1 = { id: 0, question: 'What did you most take for granted before quarantine? What does that mean to you now?' };
const q2 = { id: 1, question: 'Has this time made you more or less desensitized to life? How do you feel about your answer?' };
const q3 = { id: 2, question: 'If you could go back and offer yourself advice on the first day of quarantine, what would it be?' };
const q4 = { id: 3, question: 'Write a custom message' };
const questions = [q1, q2, q3, q4];
export const SelfQuestionList = questions;

export const AboutText = () => {
  return (
    <div>
      <font size="7">
        <p>Why was For Future Reference <i>created?</i>
        </p>
      </font>
      <font size="4">
        <p>For Future Reference started off as an idea between 4 friends who wanted to find a way to preserve our self reflections from the year 2020.
        </p>
        <p>2020 is unique because the entire world is discovering that some things are truly beyond our control. The more free time we have, the more
        time we have to think and reflect on our lives and where we’re headed towards.
        </p>
        <p>For Future Reference is a tool that helps people to reflect and treasure relationships with one another by sending out emails to oneself / loved ones into the future.
        </p>
      </font>
    </div>
  );
};
