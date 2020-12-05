import React from 'react';
import './EmailInputSectionStyles.scss';

const EmailInputSection = (props) => {
  const {
    senderFirstName, senderLastName, handleChange, recipientEmails, yearsToSend,
  } = props;
  return (
    <form>
      <div className="horizontalInputSection">
        <label htmlFor="senderFirstName">
          First Name:
          <input
            name="senderFirstName"
            type="text"
            value={senderFirstName}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="senderLastName">
          Last Name:
          <input
            name="senderLastName"
            type="text"
            value={senderLastName}
            onChange={handleChange}
          />
        </label>
      </div>
      <br />
      <div className="horizontalInputSection">
        <label htmlFor="email">
          Email:
          <input
            name="email"
            type="text"
            value={recipientEmails[0]}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="yearsToSend">
          Send me an email in:
          <select value={yearsToSend} onChange={handleChange}>
            <option value=".5">6 months</option>
            <option value="1">1 year</option>
            <option value="1.5">1.5 years</option>
            <option value="2">2 years</option>
          </select>
        </label>
      </div>
    </form>
  );
};

export default EmailInputSection;
