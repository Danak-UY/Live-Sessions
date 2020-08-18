import React from "react";
import { Button, FormControl, Input, InputLabel } from "@material-ui/core";

function FormMessage({ inputValue, handleChange, handleSubmit }) {
  const updateInput = (ev) => {
    handleChange(ev.target.value);
  };
  const sendMessage = (ev) => {
    handleSubmit(ev);
  };
  return (
    <form>
      <FormControl>
        <InputLabel>Write your message</InputLabel>
        <Input type="text" value={inputValue} onChange={updateInput} />
        <Button
          disabled={!inputValue}
          type="submit"
          variant="contained"
          color="primary"
          onClick={sendMessage}
        >
          Send Message
        </Button>
      </FormControl>
    </form>
  );
}

export default FormMessage;
