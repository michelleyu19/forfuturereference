import React from 'react';
import './QuestionListModalStyles.scss';

const QuestionListModal = (props) => {
  /**
      * show: boolean to display modal
      * onHide: callback function that closes the Modal
    */
  const {
    show, onQuit, onSave, questionList,
  } = props;
  const divStyle = {
    display: show ? 'block' : 'none',
  };

  return (
    <div className="modal"
      style={divStyle}
    >
      <div className="modal-content">
        <button type="submit" className="close" onClick={() => onQuit()}>&times;</button>
        <div id="questionHeader">Select one or more questions to answer:</div>
        <ul className="list-scroll">{questionList}</ul>
        <button className="yellowButton" type="submit" onClick={() => onSave()}>Save</button>
      </div>
    </div>
  );
};

export default QuestionListModal;
