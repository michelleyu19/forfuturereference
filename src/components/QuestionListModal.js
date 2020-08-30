import React, { Component } from 'react';
// import { SelfQuestionList } from './Text';
// import QuestionListItem from './QuestionListItem';
import './QuestionListModalStyles.scss';

class QuestionListModal extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    /**
      * show: boolean to display modal
      * onHide: callback function that closes the Modal
    */
    const { show, onHide, questionList } = this.props;
    const divStyle = {
      display: show ? 'block' : 'none',
    };

    return (
      <div className="modal"
        style={divStyle}
      >
        <div className="modal-content">
          <h3>Select one or more questions you&apos;d like to answer:</h3>
          <ul>{questionList}</ul>
          <button type="submit" onClick={() => onHide()}>Save</button>
          <button type="submit" className="close" onClick={() => onHide()}>&times;</button>
        </div>
      </div>
    );
  }
}

export default QuestionListModal;
