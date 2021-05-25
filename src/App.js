import React, { useEffect, useState } from "react";
import { withRouter } from "react-router";
import { Route, Link } from "react-router-dom";

import Intro from "./pages/Intro";
import Score from "./pages/Score";
import Quiz from "./pages/Quiz";
import End from "./pages/End";
import Rank from "./pages/Rank";

const App = () => {
  const initialState = {
    name: "힘찬이",
    page: "score",
    scoreMSG: "이 정도면 아주 친한 친구사이! 앞으로도 더 친하게 지내요!",
    list: [
      { question: "힘찬이는 28살이다", answer: "O" },
      { question: "힘찬이는 28살이다", answer: "O" },
      { question: "힘찬이는 28살이다", answer: "O" },
      { question: "힘찬이는 28살이다", answer: "O" },
      { question: "힘찬이는 28살이다", answer: "O" },
      { question: "힘찬이는 28살이다", answer: "O" },
      { question: "힘찬이는 28살이다", answer: "O" },
      { question: "힘찬이는 28살이다", answer: "O" },
      { question: "힘찬이는 28살이다", answer: "O" },
      { question: "힘찬이는 28살이다", answer: "O" },
      { question: "힘찬이는 28살이다", answer: "O" },
    ],
    ranking: [
      { rank: 1, name: "힘찬", message: "안녕 힘찬이!" },
      { rank: 1, name: "힘찬", message: "안녕 힘찬이!" },
      { rank: 1, name: "힘찬", message: "안녕 힘찬이!" },
      { rank: 1, name: "힘찬", message: "안녕 힘찬이!" },
      { rank: 1, name: "힘찬", message: "안녕 힘찬이!" },
      { rank: 1, name: "힘찬", message: "안녕 힘찬이!" },
      { rank: 1, name: "힘찬", message: "안녕 힘찬이!" },
      { rank: 1, name: "힘찬", message: "안녕 힘찬이!" },
      { rank: 1, name: "힘찬", message: "안녕 힘찬이!" },
      { rank: 1, name: "힘찬", message: "안녕 힘찬이!" },
      { rank: 1, name: "힘찬", message: "안녕 힘찬이!" },
    ],
  };
  return (
    <React.Fragment>
      <Route
        path="/"
        exact
        render={(props) => <Intro name={initialState.name} />}
      />
      <Route
        path="/score"
        render={(props) => (
          <Score name={initialState.name} message={initialState.scoreMSG} />
        )}
      />
      <Route
        path="/quiz"
        render={(props) => <Quiz list={initialState.list} />}
      />
      <Route
        path="/rank"
        render={(props) => <Rank list={initialState.list} />}
      />
      <Route path="/end" render={(props) => <End name={initialState.name} />} />
    </React.Fragment>
  );
};

export default withRouter(App);
