import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { resetAnswer } from "../redux/modules/quiz";
import { getRankFB } from "../redux/modules/rank";

import Card from "./Card";
import Spinner from "./Spinner";

const Rank = (props) => {
  const dispatch = useDispatch();
  const _ranking = useSelector((state) => state.rank.ranking);
  const is_loaded = useSelector((state) => state.rank.is_loaded);

  const user_rank = React.useRef(null);

  const ranking = _ranking.sort((a, b) => {
    // 높은 수가 맨 앞으로 오도록!
    return b.score - a.score;
  });

  React.useEffect(() => {
    dispatch(getRankFB());
    if (!user_rank.current) {
      return;
    }
    console.log("안녕하쇼");
    window.scrollTo({
      top: user_rank.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  if (!is_loaded) {
    return <Spinner />;
  }

  return (
    <Container>
      <TextContainer>
        <h2>
          <Text>{ranking.length}명</Text>의 사람들 중 당신은?
        </h2>
      </TextContainer>

      <RankContainer>
        {ranking.map((rank, idx) => {
          if (rank.current) {
            return (
              <Card
                key={idx}
                ord={idx}
                ranking={rank}
                highlight={true}
                ref={user_rank}
              />
            );
          } else {
            return <Card key={idx} ord={idx} ranking={rank} />;
          }
        })}
      </RankContainer>
      <Btn
        onClick={() => {
          dispatch(resetAnswer());
          window.location.href = "/";
        }}
      >
        다시하기
      </Btn>
    </Container>
  );
};

export default Rank;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 80vw;
  margin: auto; ;
`;

const TextContainer = styled.div`
  text-align: center;
  width: 80%;
  margin: auto;
  border: dashed 1px grey;
  border-bottom: none;
`;

const Text = styled.span`
  background-color: skyblue;
  border-radius: 20px;
  padding: 5px;
  color: white;
`;

const RankContainer = styled.div`
  width: 80%;
  height: 500px;
  margin: auto;
  border: dashed 1px grey;
  overflow-y: auto;
  margin-bottom: 5px;
`;

const Btn = styled.button`
  margin-top: 10px;
  padding: 1px 1px;
  width: 40%;
  font-size: 20px;
  background-color: skyblue;
  border: none;
  border-radius: 20px;
  margin: auto;

  &:hover {
    background-color: beige;
    transition: 0.2s;
  }
`;
