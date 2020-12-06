import React from 'react';
import './EmailInputSectionStyles.scss';

const EmailInputSection = (props) => {
  const {
    senderFirstName, senderLastName, handleChange, recipientEmails, handleRecipientEmailsChange, yearsToSend,
  } = props;
  const index = 0;
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
        <label htmlFor="recipientEmails">
          Email:
          <input
            name="recipientEmails"
            type="text"
            value={recipientEmails[index]}
            onChange={(e) => handleRecipientEmailsChange(e, index)}
          />
        </label>
        <label htmlFor="yearsToSend">
          Send me an email in:
          <select name="yearsToSend" value={yearsToSend} onChange={handleChange}>
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
