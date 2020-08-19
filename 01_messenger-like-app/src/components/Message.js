import React, { forwardRef, useState } from "react";
import { Card, CardContent, Typography } from "@material-ui/core";

import "./styles/Message.css";

const DateMonth = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function formatNumber(num) {
  if (num < 10) return "0" + num;
  return num;
}

function formatDate(timestamp) {
  const dateNow = new Date();
  const dateTime = new Date(timestamp);
  let dateString = `${formatNumber(dateTime.getHours())}:${formatNumber(
    dateTime.getMinutes()
  )}`;
  if (
    dateTime.getDate() !== dateNow.getDate() ||
    dateTime.getMonth() !== dateNow.getMonth() ||
    dateTime.getYear() !== dateNow.getYear()
  ) {
    dateString = `${
      DateMonth[dateTime.getMonth()]
    } ${dateTime.getDate()}, ${dateTime.getFullYear()} - ${dateString}`;
  }
  return dateString;
}

const Message = forwardRef(
  ({ text, username, usernameLogin, lastUser, timestamp }, ref) => {
    const isUser = usernameLogin === username;
    const isSameUser = lastUser === username;
    const [dateVisible, setDateVisible] = useState(false);

    function showDate() {
      setDateVisible(!dateVisible);
    }

    return (
      <article
        ref={ref}
        className={`message__container ${
          isUser ? "message__container--user" : "message__container--guest"
        }`}
      >
        {!isSameUser && !isUser && (
          <p className="message__username">{username}</p>
        )}
        <Card
          onClick={showDate}
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
        <p className={`message__timestamp ${dateVisible && "active"}`}>
          {formatDate(timestamp)}
        </p>
      </article>
    );
  }
);

export default Message;
