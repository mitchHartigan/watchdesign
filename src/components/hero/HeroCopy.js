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
    <FadeIn delay="400" visible>
      <Container>
        <TitleContainer>
          <TitleImg src="wd_logo_stacked.png" alt="wd logo stacked" />
          <Subtitle>Timeless Technology.</Subtitle>
          <Button handleClick={handleRedirect}>Learn More</Button>
        </TitleContainer>
      </Container>
    </FadeIn>
  );
};

const TitleImg = styled.img`
  height: auto;
  width: 450px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 30px 50px 30px 50px;
  border-radius: 10px;
  box-sizing: border-box;
  background: ${({ theme }) => theme.backgroundColor};
  box-shadow: 0px 0px 2px 1px #909090;

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
  margin: 20px 0px 10px 0px;

  @media (max-width: 900px) {
    font-size: ${({ theme }) => theme.text.md};
    margin-top: 0px;
  }
`;
