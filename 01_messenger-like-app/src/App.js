import React, { useState, useEffect } from "react";
import "./App.css";

import FormMessage from "./components/FormMessage";
import MessagesList from "./components/MessagesList";
import UsernameDialog from "./components/UsernameDialog";

const fakeMessages = [
  {
    username: "Tina",
    text: "Hi!",
  },
  {
    username: "Robert",
    text: "What's app?",
  },
  {
    username: "Tina",
    text: "Nothing new",
  },
];

function App() {
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState(fakeMessages);
  const [username, setUsername] = useState("Robert");

  const sendMessage = (ev) => {
    ev.preventDefault();
    let message = {
      username: username,
      text: inputValue,
    };
    setMessages([...messages, message]);
    setInputValue("");
  };

  const updateInput = (value) => {
    setInputValue(value);
  };

  const updateUsername = (value) => {
    setUsername(value);
  };

  useEffect(() => {}, []);

  console.log(username);

  return (
    <div className="App">
      {username === "" && (
        <UsernameDialog handleSubmit={updateUsername} username={username} />
      )}
      <h1>Hi!</h1>

      <FormMessage
        inputValue={inputValue}
        handleChange={updateInput}
        handleSubmit={sendMessage}
      />

      <MessagesList messagesArray={messages} username={username} />
    </div>
  );
}

export default App;
