import React from 'react';
import './QuestionFormStyles.scss';

const QuestionForm = (props) => {
  const { questionList } = props;
  return (
    <form>
      <ul>{questionList}</ul>
    </form>
  );
};

export default QuestionForm;
