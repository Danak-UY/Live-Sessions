import React, { forwardRef, useState } from "react";
import { Card, CardContent, Typography, Chip } from "@material-ui/core";

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

function formatDateMonth(timestamp) {
  const dateNow = new Date();
  const dateTime = new Date(timestamp);
  let dateString = `${DateMonth[dateTime.getMonth()]} ${dateTime.getDate()}`;
  if (dateTime.getDate() === dateNow.getDate()) return "today";
  if (dateNow.getDate() - dateTime.getDate() === 1) return "yesterday";
  if (dateTime.getYear() !== dateNow.getYear()) {
    dateString = `${dateString}, ${dateTime.getFullYear()}`;
  }
  return dateString;
}

const Message = forwardRef(
  ({ text, username, usernameLogin, lastUser, timestamp, newDate }, ref) => {
    const isUser = usernameLogin === username;
    const isSameUser = lastUser === username;
    const [dateVisible, setDateVisible] = useState(false);
    const dateTime = formatDateMonth(timestamp);

    function showDate() {
      setDateVisible(!dateVisible);
    }

    return (
      <>
        {newDate && <Chip label={dateTime} className="app__chip-date" />}
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
              <Typography component="p">{text}</Typography>
            </CardContent>
          </Card>
          <p className={`message__timestamp ${dateVisible && "active"}`}>
            {formatDate(timestamp)}
          </p>
        </article>
      </>
    );
  }
);

export default Message;
