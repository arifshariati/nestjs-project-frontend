import React from "react";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import "./App.css";

import Routes from "./Routes";
//MUI
import { MuiThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";

const browserHistory = createBrowserHistory();
function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Router history={browserHistory}>
        <Routes />
      </Router>
    </MuiThemeProvider>
  );
}

export default App;
