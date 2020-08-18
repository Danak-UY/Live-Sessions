import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";

import "./styles/Message.css";

function Message({ text, username, usernameLogin }) {
  const isUser = usernameLogin === username;
  return (
    <Card className={`message ${isUser ? "message__user" : "message__guest"}`}>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {username}
        </Typography>
        <Typography variant="h5" component="h2">
          {text}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Message;
