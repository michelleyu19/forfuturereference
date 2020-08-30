import React, { Component } from 'react';

class QuestionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // q1: '',
      // q2: null,
    };
  }

  myChangeHandler = (event) => {
    const nam = event.target.name;
    const val = event.target.value;
    this.setState({ [nam]: val });
  }

  render() {
    const { questionList } = this.props;
    return (
      <div>
        <form>
          <ul>{questionList}</ul>
        </form>
      </div>
    );
  }
}

export default QuestionForm;
