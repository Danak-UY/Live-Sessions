import React, { useState, useEffect } from "react";
import db from "./firebase";
import firebase from "firebase";
import "./App.css";

import FormMessage from "./components/FormMessage";
import MessagesList from "./components/MessagesList";
import UsernameDialog from "./components/UsernameDialog";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("Robert");

  const sendMessage = (ev) => {
    ev.preventDefault();
    let message = {
      username: username,
      text: inputValue,
      timestamp: firebase.firestore.Timestamp.now().toMillis(),
    };
    db.collection("messages").add(message);
    setMessages([...messages, message]);
    setInputValue("");
  };

  const updateInput = (value) => {
    setInputValue(value);
  };

  const updateUsername = (value) => {
    setUsername(value);
  };

  useEffect(() => {
    // Retrive messages from Firestore
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        );
      });
  }, []);

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
