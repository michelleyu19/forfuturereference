/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import EmailInputSection from './EmailInputSection';
import QuestionForm from './QuestionForm';
import QuestionFormItem from './QuestionFormItem';
import QuestionListItem from './QuestionListItem';
import QuestionListModal from './QuestionListModal';
import { SelfQuestionList } from './Text';
import './ResponsePageStyles.scss';
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
      addresseeName: 'Future Self',
      authorName: 'Your 2020 Self',
      senderFirstName: 'First Name Here',
      senderLastName: 'Last Name Here',
      recipientEmails: ['Enter Email Address'],
      yearsToSend: '1',
    };
    this.onCheckboxClick = this.onCheckboxClick.bind(this);
    this.onModalSave = this.onModalSave.bind(this);
    this.onModalQuit = this.onModalQuit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleArrayChange = this.handleArrayChange.bind(this);
    this.handleAnswerInputChange = this.handleAnswerInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    const nam = event.target.name;
    const val = event.target.value;
    this.setState({ [nam]: val });
  }

  handleArrayChange(event, index) {
    const nam = event.target.name;
    const val = event.target.value;
    const newArray = this.state[nam];
    newArray[index] = val;
    this.setState((prevState) => ({
      [nam]: newArray,
    }));
  }

  handleAnswerInputChange(event, id) {
    const { value } = event.target;
    this.setState((prevState) => ({
      questions: prevState.questions.map(
        (el) => (el.id === id ? { ...el, answer: value } : el),
      ),
    }));
  }

  handleSubmit() {
    const sendDate = new Date();
    sendDate.setMonth(sendDate.getMonth() + (12 * parseInt(this.state.yearsToSend, 10)));
    const savedQuestions = this.state.questions.filter((item) => item.show).map((q) => ({
      question: q.question, answer: q.answer,

    }));
    const fields = {
      senderName: this.state.senderName,
      senderEmail: this.state.email,
      recipientEmails: this.state.recipientEmails,
      reflectionText: savedQuestions,
      sendDate,
    };
    console.log(fields);
    db.createResponse(fields, this.props.history);
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
    this.setState((prevState) => ({
      openModal: false,
      questions: prevState.questions.map(
        (el) => ({ ...el, checked: el.show }),
      ),
    }));
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
      <div id="selfResponsePageWhole">
        <QuestionListModal
          className="modal"
          show={this.state.openModal}
          onQuit={this.onModalQuit}
          onSave={this.onModalSave}
          questionList={questionsList}
        />
        <div className="response-page">
          <div>Answer our questions or write your own custom message!</div>
          <label className="salutationAndClosing">
            Dear
            <input
              className="salutationAndClosing"
              name="addresseeName"
              type="text"
              value={this.state.addresseeName}
              onChange={this.handleChange}
            />
          </label>
          <QuestionForm
            questionList={questionsForm}
          />
          <button type="button" className="yellowButton" onClick={() => this.setState({ openModal: true })}> Add Questions</button>
          <label className="salutationAndClosing">
            Sincerely,
            <input
              className="salutationAndClosing"
              name="authorName"
              type="text"
              value={this.state.authorName}
              onChange={this.handleChange}
            />
          </label>
          <EmailInputSection
            senderFirstName={this.state.senderFirstName}
            senderLastName={this.state.senderLastName}
            recipientEmails={this.state.recipientEmails}
            handleRecipientEmailsChange={this.handleArrayChange}
            yearsToSend={this.state.yearsToSend}
            handleChange={this.handleChange}
          />
          <br />
          <button className="yellowButton" type="button" onClick={this.handleSubmit}> Submit</button>
        </div>
      </div>
    );
  }
}

export default SelfResponsePage;
