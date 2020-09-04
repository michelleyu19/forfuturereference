import React from 'react';
// import { SelfQuestionList } from './Text';
// import QuestionListItem from './QuestionListItem';
import './QuestionListModalStyles.scss';

const QuestionListModal = (props) => {
  /**
      * show: boolean to display modal
      * onHide: callback function that closes the Modal
    */
  const { show, onHide, questionList } = props;
  const divStyle = {
    display: show ? 'block' : 'none',
  };

  return (
    <div className="modal"
      style={divStyle}
    >
      <div className="modal-content">
        <button type="submit" className="close" onClick={() => onHide()}>&times;</button>
        <h3>Select one or more questions you&apos;d like to answer:</h3>
        <ul>{questionList}</ul>
        <button type="submit" onClick={() => onHide()}>Save</button>
      </div>
    </div>
  );
};

export default QuestionListModal;
