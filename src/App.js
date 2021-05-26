import React, { useEffect, useState } from "react";
import { withRouter } from "react-router";
import { Route, Switch } from "react-router-dom";
import { firestore } from "./firebase";

import Intro from "./pages/Intro";
import Score from "./pages/Score";
import Quiz from "./pages/Quiz";
import End from "./pages/End";
import Rank from "./pages/Rank";

const App = () => {
  return (
    <React.Fragment>
      <Route path="/" exact component={Intro} />
      <Route path="/score" component={Score} />
      <Route path="/quiz" component={Quiz} />
      <Route path="/rank" component={Rank} />
      <Route path="/end" component={End} />
    </React.Fragment>
  );
};

export default withRouter(App);
