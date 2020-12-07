import React from 'react';
import './QuestionFormStyles.scss';

const QuestionForm = (props) => {
  const { questionList } = props;
  return (
    <form id="questionForm">
      <ul id="questionFormList">{questionList}</ul>
    </form>
  );
};

export default QuestionForm;
