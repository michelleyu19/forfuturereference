import React, { Component } from 'react';
import QuestionForm from './QuestionForm';
import QuestionFormItem from './QuestionFormItem';
import QuestionListItem from './QuestionListItem';
import QuestionListModal from './QuestionListModal';
import { SelfQuestionList } from './Text';

class SelfResponsePage extends Component {
  constructor(props) {
    super(props);
    const questions = SelfQuestionList.map((item) => ({
      id: item.id, question: item.question, show: false,
    }
    ));
    console.log(questions);
    this.state = {
      openModal: false,
      questions,
    };
    this.onCheckboxClick = this.onCheckboxClick.bind(this);
  }

  onCheckboxClick(id) {
    console.log('checkbox id', id);
    this.setState((prevState) => ({

      questions: prevState.questions.map(
        (el) => (el.id === id ? { ...el, show: !prevState.questions[id].show } : el),
      ),
    }));
    console.log(this.state.questions);
  }

  render() {
    const questionsList = this.state.questions.map((item) => (
      <li key={item.id}>
        <QuestionListItem message={item.question} checked={item.show} id={item.id} handleCheckboxClick={this.onCheckboxClick} />
      </li>
    ));
    const questionsForm = this.state.questions.map((item) => <li key={item.id}><QuestionFormItem questionId={item.id} question={item.question} show={item.show} /></li>);
    return (
      <div>
        <header>To My Future Self...</header>
        <QuestionListModal
          show={this.state.openModal}
          onHide={() => this.setState({ openModal: false })}
          questionList={questionsList}
        />
        <QuestionForm
          questionList={questionsForm}
        />
        <button type="button" onClick={() => this.setState({ openModal: true })}> Add Questions</button>

      </div>
    );
  }
}

export default SelfResponsePage;
