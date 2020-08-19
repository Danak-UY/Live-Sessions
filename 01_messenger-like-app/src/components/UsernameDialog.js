import React, { useState } from "react";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";

function UsernameDialog({ handleSubmit, username }) {
  const [formUsername, setFormUsername] = useState(username);
  const updateSubmit = () => {
    handleSubmit(formUsername);
  };

  return (
    <Dialog open={username === ""} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Set your username</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Your username will be saved on this computer, you can reset it at any
          time.
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          label="Username"
          type="text"
          fullWidth
          value={formUsername}
          onChange={(ev) => setFormUsername(ev.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button disabled={!formUsername} onClick={updateSubmit} color="primary">
          Set username
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default UsernameDialog;
