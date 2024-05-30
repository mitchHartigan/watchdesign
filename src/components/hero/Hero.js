import React from "react";
import styled from "styled-components";
import { HeroCopy } from "./HeroCopy";

export default function Hero(props) {
  return (
    <Container>
      <HeroCopy />
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background-image: url(hero.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  object-fit: none;

  @media (max-width: 1450px) {
    align-items: center;
    width: 100%;
  }
`;
