import React from "react";
import styled from "styled-components";

import { Title } from "components/Title";
import closeButtonSrc from "./button_close.svg";

export default function Modal(props) {
  const { show, content, handleOrder, closeModal } = props;
  const { name, description, imgSrc, imgAlt, price } = content;

  return (
    <Container show={show}>
      <Card>
        <CloseButtonContainer>
          <CloseButton
            src={closeButtonSrc}
            alt="close buttonb"
            onClick={closeModal}
          />
        </CloseButtonContainer>
        <Image src={imgSrc} alt={imgAlt} />
        <Title
          align="center"
          spanWidth="150px"
          containerStyles={"margin-top: 10px;"}
        >
          {name}
        </Title>
        <Description>{description}</Description>
        <Price>Price: {price}</Price>
        <RequestButton onClick={() => handleOrder(name)}>
          Request {name}
        </RequestButton>
      </Card>
    </Container>
  );
}

const Card = styled.div`
  box-sizing: border-box;
  padding: 20px 40px 40px 40px;
  width: 40vw;
  background-color: ${({ theme }) => theme.backgroundColor};
  border-radius: 5px;
  box-shadow: 0px 2px 2px 1px lightgray;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: 1200px) {
    width: 70vw;
  }

  @media (max-width: 800px) {
    width: 90vw;
    padding: 20px 20px 30px 20px;
  }
`;

const CloseButton = styled.img`
  border: none;
  background-color: transparent;
  font-size: large;
  cursor: pointer;
`;

const CloseButtonContainer = styled.div`
  margin: 10px 0px 0px 0px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

const Image = styled.img`
  height: auto;
  width: 250px;

  @media (max-width: 1200px) {
    width: 150px;
  }
`;

const Description = styled.p`
  font-family: ${({ theme }) => theme.font};
  margin: 25px 0px 20px 0px;
  font-size: 14px;
  line-height: 26px;
  text-align: left;

  box-sizing: border-box;
  padding: 0px 40px 0px 40px;

  @media (max-width: 1200px) {
    margin: 15px 0px 10px 0px;
    padding: 0px 10px 0px 10px;
    font-size: 12px;
    line-height: 22px;
    text-align: center;
  }
`;

const Price = styled(Description)`
  font-size: medium;
  margin-top: 0px;
  margin-bottom: 25px;
`;

const RequestButton = styled.div`
  padding: 5px 20px 5px 20px;
  background-color: white;
  font-family: ${({ theme }) => theme.font};
  font-size: 18px;
  font-weight: 500;
  border-radius: 10px;
  border: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);
  cursor: pointer;
  transition: transform 100ms ease;
  box-sizing: border-box;
  padding: 10px 20px 10px 20px;

  &:hover {
    transform: translate(0px, -2px);
  }
  transition: transform 100ms ease;

  @media (max-width: 900px) {
    font-size: ${({ theme }) => theme.text.sm};
  }
`;

const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  display: ${({ show }) => (show ? "flex" : "none")};
  flex-direction: row;
  justify-content: center;
  align-items: center;
  z-index: 10;
  backdrop-filter: blur(5px);
`;
