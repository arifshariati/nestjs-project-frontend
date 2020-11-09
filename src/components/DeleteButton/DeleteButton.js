import React from "react";

// MUI
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles({
  customButton: {
    margin: "1rem 0rem",
    borderRadius: "30px",
    fontSize: "small",
  },
});

const DeleteButton = (props) => {
  const classes = useStyles();

  return (
    <Button
      color={props.color}
      variant="contained"
      size="large"
      startIcon={<DeleteIcon />}
      className={classes.customButton}
      onClick={props.onClick}
    >
      {props.text}
    </Button>
  );
};

export default DeleteButton;
