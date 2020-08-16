import React, { Component } from 'react';

class Question extends Component {
  constructor(props) {
    super();

    this.state = {
      checked: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState((prevState) => {
      console.log(prevState);
      return {
        checked: !prevState.checked,
      };
    });
  }

  render() {
    const text = this.state.checked ? <strong>{this.props.message}</strong> : this.props.message;
    return (
      <div className="row">
        <div className="col-md-12">
          <input type="checkbox" onClick={this.handleClick} />&nbsp;{text}
          <hr />
        </div>
      </div>
    );
  }
}

export default Question;
