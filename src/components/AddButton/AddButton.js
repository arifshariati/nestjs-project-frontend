import React from "react";

// MUI
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles({
  customButton: {
    margin: "1rem 0rem",
    borderRadius: "30px",
    fontSize: "small",
  },
});

const AddButton = (props) => {
  const classes = useStyles();
  return (
    <Button
      color={props.color}
      variant="contained"
      size="large"
      startIcon={<AddIcon />}
      className={classes.customButton}
      onClick={props.onClick}
    >
      {props.text}
    </Button>
  );
};

export default AddButton;
