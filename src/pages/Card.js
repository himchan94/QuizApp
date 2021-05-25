import React from "react";
import styled from "styled-components";

const Card = () => {
  return (
    <>
      <Container>
        <Rank>
          <h1>1등</h1>
        </Rank>
        <Message>
          <h3>김힘찬</h3>
          <h3>안녕 힘찬아</h3>
        </Message>
      </Container>
    </>
  );
};

export default Card;

const Container = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  margin-top: 20px;
`;

const Rank = styled.div`
  width: 20%;
  background-color: yellow;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Message = styled.div`
  width: 60%;
  background-color: green;
  text-align: left;
  padding-left: 20px;
`;
