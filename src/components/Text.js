/* eslint-disable react/jsx-indent */
import React from 'react';
import QuestionListItem from './QuestionListItem';

// Homepage About Text
export const WelcomeText = () => {
  return (
    <div>
      <div>
        <p>in the pace of this world, we sometimes struggle to keep up especially in times (Covid, economy, BLM) understanding this is our natural instinct to keep up w the pace,
        we wanted to provide a tool to be able to capture a certain moment(takeaways, influences, thoughts )
        </p>
        <p>But how? In order to prevent us from hopping on the next quick thing,
        for future reference not only captures but is also a reminder of the current circumstances in order to strengthen us and one another.
        Following a time of reflection we want to give the opportunity to give encouragement and thanks to the people who’ve helped us along the way.
        </p>
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
const q1 = <QuestionListItem message="What did you most take for granted before quarantine? What does that mean to you now?" />;
const q2 = <QuestionListItem message="Has this time made you more or less desensitized to life? How do you feel about your answer?" />;
const q3 = <QuestionListItem message="Write a custom message" />;
const questions = [q1, q2, q3];
export const SelfQuestionList = questions;
