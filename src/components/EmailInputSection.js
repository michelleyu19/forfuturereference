import React from 'react';
import './EmailInputSectionStyles.scss';

const EmailInputSection = (props) => {
  const {
    senderName, handleChange, recipientEmails, yearsToSend,
  } = props;
  return (
    <form>
      <label htmlFor="senderName">
        Dear:
        <input
          name="senderName"
          type="text"
          value={senderName}
          onChange={handleChange}
        />
      </label>
      <br />
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
    </form>
  );
};

export default EmailInputSection;
