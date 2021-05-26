import React from "react";
import styled from "styled-components";

const Card = ({ ranking, ord, highlight }) => {
  const { name, message } = ranking;

  return (
    <>
      <Container>
        <Rank highlight={highlight}>
          <h3>{ord + 1}</h3>
        </Rank>
        <Message highlight={highlight}>
          <h4>{name}</h4>
          <h4>{message}</h4>
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
  border: dashed 1px grey;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: none;
  background-color: ${(props) => (props.highlight ? "lightsalmon" : "none")};
`;

const Message = styled.div`
  width: 50%;
  border: dashed 1px grey;
  text-align: left;
  padding: 10px 20px;
  background-color: ${(props) => (props.highlight ? "lightsalmon" : "none")};
`;
