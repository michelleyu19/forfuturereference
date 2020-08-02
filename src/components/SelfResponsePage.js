import React, { Component } from 'react';
import QuestionListModal from './QuestionListModal';

class SelfResponsePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openModal: false,
    };
  }

  render() {
    return (
      <div>
        <header>To Your Future Self</header>
        <QuestionListModal
          show={this.state.openModal}
          onHide={() => this.setState({ openModal: false })}
        />
        <button type="button" onClick={() => this.setState({ openModal: true })}> Add Questions</button>

      </div>
    );
  }
}

export default SelfResponsePage;
