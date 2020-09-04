import React from 'react';

const QuestionForm = (props) => {
  const { questionList } = props;
  return (
    <div>
      <form>
        <ul>{questionList}</ul>
      </form>
    </div>
  );
};

export default QuestionForm;
