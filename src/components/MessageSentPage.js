import React from 'react';
import './MessageSentPageStyles.scss';

const MessageSentPage = () => {
  return (
    <div className="message-sent">
      <div>Your message was successfully sent!</div>
      <hr />
      <div>To:</div>
      <div>From:</div>
      <hr />
      <div>You can send as many messages as you want! Have more to say? Go back and write another one!</div>
    </div>
  );
};

export default MessageSentPage;
