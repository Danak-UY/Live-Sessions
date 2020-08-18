import React from "react";
import Message from "./Message";

import "./styles/MessagesList.css";

function MessagesList({ messagesArray, username }) {
  return (
    <section className="messages-list">
      {messagesArray.map((message, index) => (
        <Message key={index} {...message} usernameLogin={username} />
      ))}
    </section>
  );
}

export default MessagesList;
