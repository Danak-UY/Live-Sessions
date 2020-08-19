import React, { useState, useEffect } from "react";
import db from "./firebase";
import firebase from "firebase";
import "./App.css";

import Header from "./components/Header";
import FormMessage from "./components/FormMessage";
import MessagesList from "./components/MessagesList";
import UsernameDialog from "./components/UsernameDialog";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState(
    localStorage.getItem("username") || ""
  );

  const sendMessage = (ev) => {
    ev.preventDefault();
    if (inputValue) {
      let message = {
        username: username,
        text: inputValue,
        timestamp: firebase.firestore.Timestamp.now().toMillis(),
      };
      db.collection("messages").add(message);
      setInputValue("");
    }
  };

  const updateInput = (value) => {
    setInputValue(value);
  };

  const updateUsername = (value) => {
    setUsername(value);
    localStorage.setItem("username", value);
  };

  useEffect(() => {
    // Retrive messages from Firestore
    db.collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        );
      });
  }, []);

  return (
    <main className="app">
      {username === "" && (
        <UsernameDialog handleSubmit={updateUsername} username={username} />
      )}
      <div className="app__content">
        <Header username={username} />

        <MessagesList messagesArray={messages} username={username} />
      </div>
      <FormMessage
        inputValue={inputValue}
        handleChange={updateInput}
        handleSubmit={sendMessage}
        username={username}
        handleChangeUsername={updateUsername}
      />
    </main>
  );
}

export default App;
