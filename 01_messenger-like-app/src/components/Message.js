import React from "react";

function Message({ text, username }) {
  return (
    <div>
      <p>{username}</p>
      <h3>{text}</h3>
    </div>
  );
}

export default Message;
