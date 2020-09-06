import React from 'react';

const QuestionListItem = (props) => {
  const {
    checked, message, id, handleCheckboxClick,
  } = props;
  return (
    <div className="row">
      <div className="col-md-12">
        <input type="checkbox" checked={checked} onChange={() => handleCheckboxClick(id)} />&nbsp;{message}
        <hr />
      </div>
    </div>
  );
};

export default QuestionListItem;
