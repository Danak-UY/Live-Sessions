import React, { forwardRef } from "react";
import { Card, CardContent, Typography } from "@material-ui/core";

import "./styles/Message.css";

const Message = forwardRef(({ text, username, usernameLogin }, ref) => {
  const isUser = usernameLogin === username;
  return (
    <Card
      ref={ref}
      className={`message ${isUser ? "message__user" : "message__guest"}`}
    >
      <CardContent>
        {!isUser && (
          <Typography color="textSecondary" gutterBottom>
            {username}
          </Typography>
        )}
        <Typography variant="h5" component="h2">
          {text}
        </Typography>
      </CardContent>
    </Card>
  );
});

export default Message;
