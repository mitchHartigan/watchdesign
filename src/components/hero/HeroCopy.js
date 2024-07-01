import React from "react";
import styled from "styled-components";

import { Button } from "../Button";
import { FadeIn } from "..//FadeIn";

export const HeroCopy = () => {
  function handleRedirect() {
    const locationStr = "learn-more";
    window.location.href = locationStr;
  }

  return (
    <Container>
      <TitleContainer>
        <FadeIn delay="300" visible>
          <TitleImg src="wd_logo_stacked.jpg" alt="wd logo stacked" />
        </FadeIn>
        <FadeIn delay="500" visible>
          <Subtitle>Timeless Technology.</Subtitle>
        </FadeIn>
        <FadeIn delay="700" visible>
          <Button handleClick={handleRedirect}>Learn More</Button>
        </FadeIn>
      </TitleContainer>
    </Container>
  );
};

const TitleImg = styled.img`
  height: auto;
  width: 500px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 15px 30px 30px 30px;
  border-radius: 10px;
  box-sizing: border-box;
  background: white;
  box-shadow: 1px 1px 2px 1px lightgray;

  @media (max-width: 900px) {
    margin-left: 0px;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 1450px) {
    align-items: center;
  }
`;

const Subtitle = styled.h3`
  font-family: ${({ theme }) => theme.font};
  font-size: ${({ theme }) => theme.text.lg};
  font-weight: 400;
  margin: 10px 0px 10px 0px;

  @media (max-width: 900px) {
    font-size: ${({ theme }) => theme.text.md};
    margin-top: 0px;
  }
`;
