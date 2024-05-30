import React from "react";
import styled from "styled-components";

import { Button } from "../Button";
import { FadeIn } from "..//FadeIn";

export const HeroCopy = () => {
  function handleRedirect() {
    const locationStr = "why-hostworks";
    window.location.href = locationStr;
  }

  return (
    <Container>
      <TitleContainer>
        <FadeIn delay="300" visible>
          <ImgCenterer>
            <Title src="full_name_logo.png" alt="Full name logo." />
          </ImgCenterer>
        </FadeIn>
        <FadeIn delay="500" visible>
          <Subtitle>Elevate the guest experience.</Subtitle>
        </FadeIn>
        <FadeIn delay="700" visible>
          <Button handleClick={handleRedirect}>Find out how</Button>
        </FadeIn>
      </TitleContainer>
    </Container>
  );
};

const ImgCenterer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-left: 10vw;
  margin-top: -11vh;

  @media (max-width: 900px) {
    margin-left: 0px;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

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

  @media (max-width: 900px) {
    font-size: ${({ theme }) => theme.text.md};
    margin-top: 0px;
  }
`;
