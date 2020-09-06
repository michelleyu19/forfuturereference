/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import QuestionForm from './QuestionForm';
import QuestionFormItem from './QuestionFormItem';
import QuestionListItem from './QuestionListItem';
import QuestionListModal from './QuestionListModal';
import { SelfQuestionList } from './Text';
import * as db from '../actions/index';

class SelfResponsePage extends Component {
  constructor(props) {
    super(props);
    const questions = SelfQuestionList.map((item) => ({
      id: item.id, question: item.question, answer: '', show: false, checked: false,
    }
    ));
    this.state = {
      openModal: true,
      questions,
      senderName: '',
      email: '',
      yearsToSend: '1',
    };
    this.onCheckboxClick = this.onCheckboxClick.bind(this);
    this.onModalSave = this.onModalSave.bind(this);
    this.onModalQuit = this.onModalQuit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleAnswerInputChange = this.handleAnswerInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onCheckboxClick(id) {
    this.setState((prevState) => ({
      questions: prevState.questions.map(
        (el) => (el.id === id ? { ...el, checked: !prevState.questions[id].checked } : el),
      ),
    }));
  }

  onModalSave() {
    console.log('before save:', this.state.questions);
    this.setState((prevState) => ({
      openModal: false,
      questions: prevState.questions.map(
        (el) => ({ ...el, show: el.checked }),
      ),
    }));
    console.log('after save:', this.state.questions);
  }

  onModalQuit() {
    console.log('before quit:', this.state.questions);
    this.setState((prevState) => ({
      openModal: false,
      questions: prevState.questions.map(
        (el) => ({ ...el, checked: el.show }),
      ),
    }));
    console.log('after quit:', this.state.questions);
  }

  handleChange = (event) => {
    const nam = event.target.name;
    const val = event.target.value;
    this.setState({ [nam]: val });
  }

  handleAnswerInputChange(event, id) {
    const { value } = event.target;
    this.setState((prevState) => ({
      questions: prevState.questions.map(
        (el) => (el.id === id ? { ...el, answer: value } : el),
      ),
    }));
  }

  handleSubmit(event) {
    const sendDate = new Date();
    sendDate.setMonth(sendDate.getMonth() + (12 * parseInt(this.state.yearsToSend, 10)));
    const savedQuestions = this.state.questions.filter((item) => item.show).map((q) => ({
      question: q.question, answer: q.answer,

    }));
    const fields = {
      senderName: this.state.senderName,
      senderEmail: this.state.email,
      recipientEmails: [this.state.email],
      reflectionText: savedQuestions,
      sendDate,
    };
    console.log(fields);
    db.createResponse(fields, this.props.history);
  }

  render() {
    const questionsList = this.state.questions.map((item) => (
      <li key={item.id}>
        <QuestionListItem message={item.question} checked={item.checked} id={item.id} handleCheckboxClick={this.onCheckboxClick} />
      </li>
    ));
    const questionsForm = this.state.questions.map((item) => (
      <li key={item.id}>
        <QuestionFormItem questionId={item.id} question={item.question} answer={item.answer} show={item.show} handleAnswerInput={this.handleAnswerInputChange} />
      </li>
    ));
    return (
      <div>
        <div>
          <form>
            <label>
              Dear:
              <input
                name="senderName"
                type="text"
                value={this.state.senderName}
                onChange={this.handleChange}
              />
            </label>
            <br />
            <label>
              Email:
              <input
                name="email"
                type="text"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </label>
            <label>
              Send me an email in:
              <select value={this.state.yearsToSend} onChange={this.handleChange}>
                <option value=".5">6 months</option>
                <option value="1">1 year</option>
                <option value="1.5">1.5 years</option>
                <option value="2">2 years</option>
              </select>
            </label>
          </form>
        </div>
        <div>To My Future Self...</div>
        <QuestionListModal
          show={this.state.openModal}
          onQuit={this.onModalQuit}
          onSave={this.onModalSave}
          questionList={questionsList}
        />
        <QuestionForm
          questionList={questionsForm}
        />
        <button type="button" onClick={() => this.setState({ openModal: true })}> Add Questions</button>
        <button type="button" onClick={this.handleSubmit}> Submit</button>
      </div>
    );
  }
}

export default SelfResponsePage;
