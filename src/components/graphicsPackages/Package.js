import React from "react";
import styled from "styled-components";

export const Package = (props) => {
  const { imgSrc, imgAlt, name, openModal } = props;

  return (
    <Container onClick={() => openModal(name)}>
      <Image src={imgSrc} alt={imgAlt} />
      <Text>{name}</Text>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0px 2vw 0vh 2vw;
  cursor: pointer;

  @media (max-width: 900px) {
    margin: 20px 20px 20px 20px;
  }
`;

const Image = styled.img`
  &:hover {
    transform: translate(0, -2px);
  }
  transition: transform 100ms ease;

  @media (max-width: 900px) {
    width: 100%;
    height: auto;
  }
`;

const Text = styled.p`
  font-family: ${({ theme }) => theme.font};
  font-size: ${({ theme }) => theme.text.sm};
  text-align: center;
  margin-top: 20px;
`;
