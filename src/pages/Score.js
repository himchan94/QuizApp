import React from "react";
import styled from "styled-components";

const Score = ({ name, message }) => {
  return (
    <Container>
      <h1 style={{ marginTop: "50px", display: "block" }}>
        <Text>{name}</Text> 퀴즈에 대한 <br></br> 내 점수는??
      </h1>
      <h1>
        <Text>100점</Text>
      </h1>
      <h3 style={{ width: "100%" }}>{message}</h3>
      <Btn>점수보기</Btn>
      <Btn>랭킹보기</Btn>
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
  margin-top: 100px;
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
