import React from "react";
import styled from "styled-components";

export const ContactInfo = () => {
  return (
    <Container>
      <TitleImg src="wd_logo_horizontal.png" alt="hostworks title horizontal" />
      <Subtitle href="mailto:sales@hostworkspromo.com">
        sales@watchdesign.com
      </Subtitle>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0px 20px 0px 20px;
`;

const TitleImg = styled.img`
  height: auto;
  width: 250px;
  margin-bottom: 5px;
`;

const Title = styled.h3`
  font-size: ${({ theme }) => theme.text.lg};
  font-family: ${({ theme }) => theme.font};
  margin-bottom: 5px;
`;

const Subtitle = styled.a`
  font-family: ${({ theme }) => theme.font};
  font-size: ${({ theme }) => theme.text.sm};
  text-decoration: none;
  color: black;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.color};
  }
`;
