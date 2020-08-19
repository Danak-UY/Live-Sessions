import React, { useState, useEffect, Fragment } from "react";
import FlipMove from "react-flip-move";
import Message from "./Message";

import "./styles/MessagesList.css";

function MessagesList({ messagesArray, username }) {
  let lastUser = "";
  let lastDate = 0;
  const [firstLoad, setFirstLoad] = useState(true);

  useEffect(() => {
    if (
      (messagesArray.length !== 0 &&
        messagesArray[messagesArray.length - 1].data.username === username) ||
      (messagesArray.length !== 0 && firstLoad)
    ) {
      setFirstLoad(false);
      const divMessages = document.querySelector(".app__messages");
      const lastMessage = document.querySelector(
        ".app__messages article:last-of-type"
      );
      if (lastMessage)
        divMessages.scrollTop =
          lastMessage.offsetTop + lastMessage.offsetHeight;
    }
  }, [messagesArray]);

  return (
    <FlipMove className="app__messages" id="scroller" typeName="section">
      {messagesArray.map(({ data, id }) => {
        const currentDate = new Date(data.timestamp).getDate();
        const objectMessage = (
          <Message
            key={id}
            {...data}
            usernameLogin={username}
            lastUser={lastUser}
            newDate={lastDate !== "" && currentDate !== lastDate}
          />
        );
        lastUser = data.username;
        lastDate = currentDate;
        return objectMessage;
      })}
      <div id="anchor"></div>
    </FlipMove>
  );
}

export default MessagesList;
