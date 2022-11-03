import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import React from "react";
import { useState, useEffect } from "react";

const Message = props => {
  const [open, setOpen] = useState("false");
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (props) setOpen(true);
  }, [props, setOpen]);
  return (
    <Snackbar autoHideDuration={3000} open={open} onClose={handleClose}>
      <Alert
        severity={props.severity}
        sx={{ width: "100%" }}
        onClose={handleClose}
      >
        {props.message}
      </Alert>
    </Snackbar>
  );
};

export default Message;
