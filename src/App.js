import React from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { globalStyles } from "./globalStyles";

import Homepage from "./pages/Homepage";
import WhyHostworks from "./pages/WhyHostworks";
import Blog from "./pages/blog/index";
import history from "./history";

function App() {
  return (
    <ThemeProvider theme={globalStyles}>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/why-hostworks">
            <WhyHostworks />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
