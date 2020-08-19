import React from "react";
import FlipMove from "react-flip-move";
import Message from "./Message";

import "./styles/MessagesList.css";

function MessagesList({ messagesArray, username }) {
  let lastUser = "";
  return (
    <FlipMove className="app__messages" typeName="section">
      {messagesArray.map(({ data, id }) => {
        const objectMessage = (
          <Message
            key={id}
            {...data}
            usernameLogin={username}
            lastUser={lastUser}
          />
        );
        lastUser = data.username;
        return objectMessage;
      })}
    </FlipMove>
  );
}

export default MessagesList;
