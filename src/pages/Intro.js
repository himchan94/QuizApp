import React from "react";

import styled from "styled-components";

import { useDispatch, useSelector } from "react-redux";
import { addUserName } from "../redux/modules/rank";

const Intro = (props) => {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.quiz.name);
  const input_text = React.useRef(null);

  return (
    <Container>
      <Img />
      <h1 style={{ fontSize: "30px", marginTop: "40px" }}>
        나는 <Text>{name}</Text>에 대해 <br></br>얼마나 알고 있을까 ?
      </h1>
      <Input placeholder="내 이름" ref={input_text} />
      <Btn
        onClick={() => {
          dispatch(addUserName(input_text.current.value));
          props.history.push("/quiz");
        }}
      >
        시작하기
      </Btn>
    </Container>
  );
};

export default Intro;

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
  padding: 10px 50px;
  font-size: 20px;
  background-color: skyblue;
  border: none;
  border-radius: 20px;

  &:hover {
    background-color: beige;
    transition: 0.2s;
  }
`;
