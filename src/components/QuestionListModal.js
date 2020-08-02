import React, { Component } from 'react';

class QuestionListModal extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    console.log('rendering questionlistmodal;');
    /**
      * show: boolean to display modal
      * onHide: callback function that closes the Modal
    */
    const { show, onHide } = this.props;
    const divStyle = {
      display: show ? 'block' : 'none',
    };

    return (
      <div className="modal"
        style={divStyle}
      >
        <div className="modal-content">
          <h3>Select the questions you&apos;d like to answer:</h3>
          <button type="submit" onClick={() => onHide()}>Close</button>
          {/* <button type="submit" className="close" onClick={() => onHide()}>&times;</button> */}
        </div>
      </div>
    );
  }
}

export default QuestionListModal;
