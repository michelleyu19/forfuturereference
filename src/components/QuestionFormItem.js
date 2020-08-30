import React, { Component } from 'react';

class QuestionFormItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  myChangeHandler = (event) => {
    const nam = event.target.name;
    const val = event.target.value;
    this.setState({ [nam]: val });
  }

  render() {
    const { question, questionId, show } = this.props;
    const divStyle = {
      display: show ? 'block' : 'none',
    };
    return (
      <div style={divStyle}>
        <p>{question}</p>
        <textarea
          type="text"
          name={questionId}
          onChange={this.myChangeHandler}
        />
      </div>
    );
  }
}

export default QuestionFormItem;
