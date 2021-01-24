import React from 'react';
import './MessageSentPageStyles.scss';

const MessageSentPage = () => {
  return (
    <div className="message-sent">
      <div>Your message was successfully saved! Please check your inbox to verify your email and your message will be officially scheduled to be sent out!</div>
      <hr />
      <div>To:</div>
      <div>From:</div>
      <hr />
      <div>You can send as many messages as you want! Have more to say? Go back and write another one!</div>
    </div>
  );
};

export default MessageSentPage;
