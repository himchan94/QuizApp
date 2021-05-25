import React from "react";
import styled from "styled-components";

import Card from "./Card";

const Rank = () => {
  return (
    <Container>
      <TextContainer>
        <h1>
          <Text>7명</Text>의 사람들 중 당신은?
        </h1>
      </TextContainer>

      <RankContainer>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </RankContainer>
    </Container>
  );
};

export default Rank;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

const TextContainer = styled.div`
  text-align: center;
  width: 80%;
  margin: auto;
  border: dashed 1px grey;
`;

const Text = styled.span`
  background-color: skyblue;
  border-radius: 20px;
  padding: 5px;
  color: white;
`;

const RankContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 80%;
  height: 500px;
  margin: auto;
  border: dashed 1px grey;
  overflow-y: scroll;
`;
