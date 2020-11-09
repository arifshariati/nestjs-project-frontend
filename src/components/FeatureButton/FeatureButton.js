import React from "react";

// MUI
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

const useStyles = makeStyles({
  customButton: {
    borderRadius: "30px",
    fontSize: "small",
  },
});

const FeatureButton = (props) => {
  const classes = useStyles();
  return (
    <Button
      startIcon={props.icon}
      variant="text"
      className={classes.customButton}
    >
      {props.text}
    </Button>
  );
};

export default FeatureButton;
