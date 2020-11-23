import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Movies from "./Movies";
import Comments from "./Comments";
import { COMMENTS, MOVIES } from "./paths";
import NotFound from "./NotFound";

const Pages = () => {
  return (
    <Router>
      <Switch>
        <Route path={COMMENTS} component={Comments} exact />
        <Route path={MOVIES} component={Movies} exact />
        <Route path="*" component={NotFound} exact />
      </Switch>
    </Router>
  );
};

export default Pages;
