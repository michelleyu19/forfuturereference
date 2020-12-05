import React from 'react';

const QuestionFormItem = (props) => {
  const {
    question, questionId, answer, show, handleAnswerInput,
  } = props;
  const divStyle = {
    display: show ? 'block' : 'none',
  };
  return (
    <div style={divStyle}>
      <p>{question}</p>
      <textarea
        type="text"
        name={questionId}
        value={answer}
        onChange={(e) => handleAnswerInput(e, questionId)}
      />
    </div>
  );
};

export default QuestionFormItem;
