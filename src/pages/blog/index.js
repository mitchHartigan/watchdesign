import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useRouteMatch,
} from "react-router-dom";
import styled from "styled-components";

import BlogHub from "./BlogHub";
import BlogPage from "./BlogPage";

export default function Blog() {
  const { path } = useRouteMatch();

  return (
    <Container>
      <Router>
        <Switch>
          <Route exact path={path}>
            <BlogHub />
          </Route>
          <Route path={`${path}/:canonTitle`}>
            <BlogPage />
          </Route>
        </Switch>
      </Router>
    </Container>
  );
}

const Container = styled.div``;
