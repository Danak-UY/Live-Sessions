import React from "react";
import FlipMove from "react-flip-move";
import Message from "./Message";

import "./styles/MessagesList.css";

function MessagesList({ messagesArray, username }) {
  return (
    <FlipMove className="app__messages" typeName="section">
      {messagesArray.map(({ data, id }) => (
        <Message key={id} {...data} usernameLogin={username} />
      ))}
    </FlipMove>
  );
}

export default MessagesList;
