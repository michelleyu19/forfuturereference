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
    return (
      <form>
        <p>What did you most take for granted before quarantine? What does that mean to you now?</p>
        <textarea
          type="text"
          name="q1"
          onChange={this.myChangeHandler}
        />
        <p>Has this time made you more or less desensitized to life? How do you feel about your answer?</p>
        <textarea
          type="text"
          name="q2"
          onChange={this.myChangeHandler}
        />
        <p>Write a custom note:</p>
        <textarea
          type="text"
          name="q3"
          onChange={this.myChangeHandler}
        />
      </form>
    );
  }
}

export default QuestionForm;
