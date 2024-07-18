import React from "react";
import styled from "styled-components";
import { HeroCopy } from "./HeroCopy";

export default function Hero(props) {
  const { handleClick } = props;

  return (
    <Container>
      <HeroCopy handleClick={handleClick} />
      <Filter />
    </Container>
  );
}

const Filter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(2px);
`;

const Container = styled.div`
  height: 100vh;
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url("wd_hero.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  object-fit: none;

  @media (max-width: 1450px) {
    align-items: center;
    width: 100%;
  }
`;
