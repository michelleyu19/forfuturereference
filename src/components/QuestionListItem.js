import React from 'react';

const Question = (props) => {
  const {
    checked, message, id, handleCheckboxClick,
  } = props;
  const text = checked ? <strong>{message}</strong> : message;
  return (
    <div className="row">
      <div className="col-md-12">
        <input type="checkbox" onClick={() => handleCheckboxClick(id)} />&nbsp;{text}
        <hr />
      </div>
    </div>
  );
};

export default Question;
