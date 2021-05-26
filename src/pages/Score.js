import React from "react";
import styled from "styled-components";

import { useSelector, useDispatch } from "react-redux";
import { addRank } from "../redux/modules/rank";

const Score = (props) => {
  const name = useSelector((state) => state.quiz.name);
  const score_texts = useSelector((state) => state.quiz.score_texts);

  const answers = useSelector((state) => state.quiz.answers);

  // 정답만 걸러내기
  let correct = answers.filter((answer) => {
    return answer;
  });

  // 점수 계산하기
  let score = (correct.length / answers.length) * 100;

  // 점수별로 텍스트를 띄워줄 준비!
  let score_text = "";

  // Object.keys는 딕셔너리의 키값을 배열로 만들어주는 친구예요!
  Object.keys(score_texts).map((s, idx) => {
    // 첫번째 텍스트 넣어주기
    if (idx === 0) {
      score_text = score_texts[s];
    }
    // 실제 점수와 기준 점수(키로 넣었던 점수) 비교해서 텍스트를 넣자!
    score_text = parseInt(s) <= score ? score_texts[s] : score_text;
  });

  return (
    <Container>
      <h1 style={{ marginTop: "50px", display: "block" }}>
        <Text>{name}</Text> 퀴즈에 대한 <br></br> 내 점수는??
      </h1>
      <h1>
        <Text>{score}</Text>
      </h1>
      <h3 style={{ width: "100%" }}>{score_text}</h3>
      <Btn
        onClick={() => {
          props.history.push("./end");
        }}
      >
        {name}에게 한마디
      </Btn>
    </Container>
  );
};

export default Score;

const Container = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: bisque;
  margin: auto;
  margin-top: 50px;
  border-radius: 50px;
  padding: 20px;
`;

const Text = styled.span`
  background-color: skyblue;
  border-radius: 20px;
  padding: 5px;
  color: white;
`;

const Btn = styled.button`
  margin-top: 30px;
  padding: 10px 10px;
  font-size: 20px;
  background-color: skyblue;
  border: none;
  border-radius: 20px;

  &:hover {
    background-color: beige;
    transition: 0.2s;
  }
`;
