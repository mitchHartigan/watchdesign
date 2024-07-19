import React from "react";
import styled from "styled-components";

import { Button } from "../Button";
import { FadeIn } from "..//FadeIn";

export const HeroCopy = (props) => {
  const { handleClick } = props;

  function handleRedirect() {
    const locationStr = "learn-more";
    window.location.href = locationStr;
  }

  return (
    <Container>
      <TitleContainer>
        <TitleImg src="wd_logo_horizontal.png" alt="wd logo horizontal" />
      </TitleContainer>
      <ChevronContainer onClick={handleClick}>
        <ChevronText>Learn More</ChevronText>
        <Chevron src="wd_chevron.png" alt="chevron icon" />
      </ChevronContainer>
    </Container>
  );
};

const ChevronContainer = styled.div`
  position: absolute;
  bottom: 28px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    transform: translate(0, -2px);
  }

  transition: transform 50ms linear;
`;

const ChevronText = styled.p`
  color: white;
  font-size: 20px;
  font-family: ${({ theme }) => theme.font};
  margin-bottom: 8px;
`;

const TitleImg = styled.img`
  height: auto;
  width: 450px;
`;

const Chevron = styled.img`
  width: 40px;
  height: auto;
`;

const Container = styled.div`
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 900px) {
    margin-left: 0px;
  }
`;

const TitleContainer = styled.div`
  top: 48vh;
  padding: 10px 15px 10px 11px;
  border-radius: 7px;
  box-sizing: border-box;
  background: ${({ theme }) => theme.backgroundColor};
  box-shadow: 0px 0px 2px 1px #909090;
  display: flex;
  position: absolute;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 1450px) {
    align-items: center;
  }
`;
