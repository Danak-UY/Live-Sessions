import React from "react";
import { FormControl, Input, IconButton } from "@material-ui/core";
import SendRoundedIcon from "@material-ui/icons/SendRounded";
import "./styles/FormMessage.css";

function FormMessage({ inputValue, handleChange, handleSubmit, username }) {
  const updateInput = (ev) => {
    handleChange(ev.target.value);
  };
  const sendMessage = (ev) => {
    handleSubmit(ev);
  };
  return (
    <form className="app__form">
      <p className="form__title">
        Your are writing as <strong>{username}</strong>
      </p>
      <FormControl className="app__formControl">
        <Input
          placeholder="Enter your message"
          type="text"
          value={inputValue}
          onChange={updateInput}
          className="app__formInput"
        />
        <IconButton
          type="submit"
          variant="contained"
          color="primary"
          onClick={sendMessage}
          aria-label="send message"
          className="app__formButton"
        >
          <SendRoundedIcon />
        </IconButton>
      </FormControl>
    </form>
  );
}

export default FormMessage;
