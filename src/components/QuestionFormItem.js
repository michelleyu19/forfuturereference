import React from 'react';
import './QuestionFormStyles.scss';

const QuestionFormItem = (props) => {
  const {
    question, questionId, answer, show, handleAnswerInput,
  } = props;
  const divStyle = {
    display: show ? 'block' : 'none',
  };
  return (
    <div style={divStyle}>
      <div className="questionFormItem">
        <p>{question}</p>
        <textarea
          id="questionResponseInputBox"
          type="text"
          name={questionId}
          value={answer}
          onChange={(e) => handleAnswerInput(e, questionId)}
        />
      </div>
    </div>
  );
};

export default QuestionFormItem;
