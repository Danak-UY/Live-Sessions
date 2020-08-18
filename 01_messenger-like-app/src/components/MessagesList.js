import React from "react";
import Message from "./Message";

function MessagesList({ messagesArray }) {
  return (
    <section>
      {messagesArray.map((message, index) => (
        <Message key={index} text={message} />
      ))}
    </section>
  );
}

export default MessagesList;
