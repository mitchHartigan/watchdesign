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
          <HeroTitle>WatchDesign</HeroTitle>
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

const HeroTitle = styled.p`
  margin: 10px 0px 5px -2px;
  font-weight: medium;
  font-size: 5.5rem;
  font-family: ${(props) => props.theme.font};
  text-shadow: 1px 2px 2px #202020;
  color: white;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 15px 25px 15px;
  border-radius: 10px;
  box-sizing: border-box;
  backdrop-filter: blur(10px);

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

const Title = styled.img`
  @media (max-width: 900px) {
    width: 80%;
    height: auto;
    margin-bottom: 0px;
  }
`;

const Subtitle = styled.h3`
  font-family: ${({ theme }) => theme.font};
  font-size: ${({ theme }) => theme.text.lg};
  font-weight: 400;
  margin-top: 0px;
  color: white;

  @media (max-width: 900px) {
    font-size: ${({ theme }) => theme.text.md};
    margin-top: 0px;
  }
`;
