import React from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { globalStyles } from "./globalStyles";

import Homepage from "./pages/Homepage";
import LearnMore from "./pages/LearnMore";
import Inventory from "./pages/Inventory";
import history from "./history";

function App() {
  return (
    <ThemeProvider theme={globalStyles}>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/learn-more">
            <LearnMore />
          </Route>
          <Route path="/inventory">
            <Inventory />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
