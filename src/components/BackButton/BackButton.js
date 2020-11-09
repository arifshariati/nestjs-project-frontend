import React from "react";

// MUI
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

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
      color="secondary"
      variant="contained"
      size="large"
      startIcon={<ArrowBackIcon />}
      className={classes.customButton}
      onClick={props.onClick}
    >
      {props.text}
    </Button>
  );
};

export default AddButton;
