import React from "react";

import styled from "styled-components";

const End = ({ name }) => {
  return (
    <Container>
      <Img />
      <h1 style={{ fontSize: "40px", marginTop: "40px" }}>
        <Text>{name}</Text>에게 한마디
      </h1>
      <Input placeholder="한마디만 하세요" />
      <Btn>한마디하고 랭킹 보러하기</Btn>
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
