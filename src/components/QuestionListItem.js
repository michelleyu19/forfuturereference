import React, { Component } from 'react';

class Question extends Component {
  constructor(props) {
    super();

    this.state = {
    };
  }

  render() {
    const {
      checked, message, id, handleCheckboxClick,
    } = this.props;
    const text = checked ? <strong>{message}</strong> : message;
    return (
      <div className="row">
        <div className="col-md-12">
          <input type="checkbox" onClick={() => handleCheckboxClick(id)} />&nbsp;{text}
          <hr />
        </div>
      </div>
    );
  }
}

export default Question;
