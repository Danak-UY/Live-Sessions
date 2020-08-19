import React, { forwardRef } from "react";
import { Card, CardContent, Typography } from "@material-ui/core";

import "./styles/Message.css";

const Message = forwardRef(
  ({ text, username, usernameLogin, lastUser }, ref) => {
    const isUser = usernameLogin === username;
    const isSameUser = lastUser === username;

    return (
      <>
        {!isSameUser && !isUser && (
          <p className="message__username">{username}</p>
        )}
        <Card
          ref={ref}
          className={`message ${isUser ? "message__user" : "message__guest"}`}
        >
          <CardContent>
            {isUser === "thi" && (
              <Typography color="textSecondary" gutterBottom>
                {username}
              </Typography>
            )}
            <Typography component="p">{text}</Typography>
          </CardContent>
        </Card>
      </>
    );
  }
);

export default Message;
