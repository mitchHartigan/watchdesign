import React from "react";
import styled from "styled-components";

import { Title } from "components/Title";

export default function Preview(props) {
  const { imgSrc, imgAlt, title, previewText, canonTitle, date } = props;

  return (
    <Container href={`/blog/${canonTitle}`}>
      <PreviewImage src={imgSrc} alt={imgAlt} />
      <Title
        containerStyles="margin-top: 25px; margin-bottom: 10px;"
        textStyles="font-size: large;"
        spanWidth="200px"
        align="center"
      >
        {title}
      </Title>
      <DateText>{date}</DateText>
      <PreviewText>{previewText}</PreviewText>
    </Container>
  );
}

const PreviewImage = styled.img`
  height: auto;
  width: 450px;
  max-height: 400px;
`;

const PreviewText = styled.p`
  width: 100%;
  font-family: ${({ theme }) => theme.font};
  font-size: 0.9rem;
  text-align: center;
  margin-top: 10px;
  box-sizing: border-box;
  padding: 0px 40px 0px 40px;
`;

const DateText = styled.h3`
  margin: 10px 0px 0px 0px;
  font-weight: normal;
  font-family: ${({ theme }) => theme.font};
  font-size: ${({ theme }) => theme.text.sm};
  text-align: center;
`;

const Container = styled.a`
  display: flex;
  border: 1px solid lightgray;
  flex-direction: column;
  align-items: center;
  width: 40vw;
  box-shadow: 1px 1px 2px 1px lightgray;
  margin: 30px 0px 30px 0px;
  box-sizing: border-box;
  padding: 40px 20px 20px 20px;
  border-radius: 5px;
  cursor: pointer;
  background-color: white;
  text-decoration: none;
  color: black;
  transition: transform 75ms ease;
  transform: translateY(0px);

  &:hover {
    transform: translateY(-2px);
    transition: transform 75ms ease;
  }
`;
