import React from 'react';
import './EmailInputSectionStyles.scss';

const EmailInputSection = (props) => {
  const {
    senderFirstName, senderLastName, handleChange, recipientEmails, handleRecipientEmailsChange, yearsToSend,
  } = props;
  const index = recipientEmails.length;
  console.log(recipientEmails);
  // const index = 0;
  return (
    <form>
      <div className="horizontalInputSection">
        <label className="sectionField" htmlFor="senderFirstName">
          <span>First Name:</span>
          <input
            className="inputField"
            name="senderFirstName"
            type="text"
            value={senderFirstName}
            onChange={handleChange}
          />
        </label>
        <label className="sectionField" htmlFor="senderLastName">
          <span>Last Name:</span>
          <input
            className="inputField"
            name="senderLastName"
            type="text"
            value={senderLastName}
            onChange={handleChange}
          />
        </label>
      </div>
      <br />
      <div className="horizontalInputSection">
        <label className="sectionField" htmlFor="recipientEmails">
          <span>Email:</span>
          <input
            className="inputField"
            name="recipientEmails"
            type="text"
            value={recipientEmails[index]}
            onChange={(e) => handleRecipientEmailsChange(e, index)}
          />
        </label>
        <label className="sectionField" htmlFor="yearsToSend">
          <span>Send me an email in:</span>
          <select className="inputField" name="yearsToSend" value={yearsToSend} onChange={handleChange}>
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
