import React from "react";

import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { addRank, addRankFB } from "../redux/modules/rank";

const End = (props) => {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.quiz.name);
  const answers = useSelector((state) => state.quiz.answers);
  const user_name = useSelector((state) => state.rank.user_name);

  const input_text = React.useRef(null);

  let correct = answers.filter((answer) => {
    return answer;
  });

  let score = (correct.length / answers.length) * 100;

  return (
    <Container>
      <Img />
      <h1 style={{ fontSize: "35px", marginTop: "40px" }}>
        <Text>{name}</Text>에게 한마디
      </h1>
      <Input placeholder="한마디만 하세요" ref={input_text} />
      <Btn
        onClick={() => {
          let rank_info = {
            score: parseInt(score),
            name: user_name,
            message: input_text.current.value,
            current: true,
          };
          // 랭킹 정보 넣기
          dispatch(addRankFB(rank_info));
          // 주소 이동
          window.setTimeout(() => {
            props.history.push("/rank");
          }, 1000);
        }}
      >
        한마디하고 랭킹 보러하기
      </Btn>
    </Container>
  );
};

export default End;

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Img = styled.div`
  width: 300px;
  height: 300px;
  background-color: pink;
  border-radius: 50%;
  background-image: url("https://stickershop.line-scdn.net/stickershop/v1/product/1295959/LINEStorePC/main.png;compress=true");
  background-size: cover;
  margin-top: 50px;
`;

const Text = styled.span`
  background-color: skyblue;
  border-radius: 20px;
  padding: 5px;
  color: white;
`;

const Input = styled.input`
  width: 50%;
  height: 50px;
  border: none;
  background-color: skyblue;
  border-radius: 20px;
  font-size: 20px;
  padding: 0 10px;
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
