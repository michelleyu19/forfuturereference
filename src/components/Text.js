/* eslint-disable react/jsx-indent */
import React from 'react';

// Homepage About Text
export const WelcomeText = () => {
  return (
    <div>
      <div>
        <p> A tool to capture the present, remember the past, and refresh your outlook on the future.
        </p>
        <p>But how? In order to prevent us from hopping on the next quick thing,
        for future reference not only captures but is also a reminder of the current circumstances in order to strengthen us and one another.
        Following a time of reflection we want to give the opportunity to give encouragement and thanks to the people who’ve helped us along the way.
        </p>
      </div>
    </div>
  );
};

// Homepage faq
export const FaqContent = {
  title: 'FAQ',
  rows: [
    {
      title: 'How do I know my info is safe?',
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat, 
              ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus. 
              In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae. 
              Fusce sed commodo purus, at tempus turpis.`,
    },
    {
      title: 'Where will I recieve my email?',
      content:
        'Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.',
    },
    {
      title: 'Curabitur laoreet, mauris vel blandit fringilla',
      content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem. 
            Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam. 
            Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat. 
            Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
    },
    {
      title: 'What is the package version',
      content: 'v1.0.0',
    },
  ],
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
const q4 = { id: 3, question: 'Do you feel more or less comfortable in solitude than you did before quarantine?' };
const q5 = { id: 4, question: 'Are you an introvert or extrovert? How do you think that has affected your quarantine experience?' };
const q6 = { id: 5, question: 'Write a custom message' };
const questions = [q1, q2, q3, q4, q5, q6];
export const SelfQuestionList = questions;
