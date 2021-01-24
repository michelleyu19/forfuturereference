// Homepage faq
export const FaqContent = {
  title: 'F.A.Q.',
  rows: [
    {
      title: 'Where will I recieve my email?',
      content:
        'You will receive your email to the email address you provide when you create your message.',
    },
    {
      title: 'What is the package version',
      content: 'v1.0.0',
    },
    {
      title: 'If I send an email to a loved one, do I also receive a copy of that email in X amount of year(s)?',
      content: 'Yes.',
    },
    {
      title: 'Can I send multiple emails?',
      content: 'Yes.',
    },
    {
      title: 'Who is this site made by?',
      content: 'This site was made by 4 friends who wanted to capture thoughts and remember things from 2020.',
    },
  ],
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
