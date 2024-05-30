import React from "react";
import styled from "styled-components";
import { TextLink } from "./TextLink";
import { ContactLink } from "./ContactLink";

export const Menu = (props) => {
  const { toggleMenu, homepage, handleContact } = props;

  return (
    <Container>
      <HeaderContainer>
        <Title>HostWorks Promo</Title>
        <CancelButton onClick={toggleMenu}>x</CancelButton>
      </HeaderContainer>

      <Span></Span>

      <LinkContainer>
        <TextLink menu destination="/">
          Home
        </TextLink>
        <TextLink menu destination="/why-hostworks">
          Why Hostworks
        </TextLink>
        <ContactLink
          hamburger={true}
          homepage={homepage}
          handleClick={handleContact}
        >
          Contact
        </ContactLink>
        <TextLink menu destination="/blog">
          Blog
        </TextLink>
      </LinkContainer>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  z-index: 10;
  height: 100%;
  width: 35%;
  box-sizing: border-box;
  background-color: white;
  padding: 25px 20px 0px 10px;
  min-width: 250px;
  box-shadow: 1px 2px 4px gray;

  @media (min-width: 1450px) {
    display: none;
  }
`;

const CancelButton = styled.p`
  font-size: 25px;
  font-family: ${({ theme }) => theme.font};
  font-weight: normal;
  margin: 0px;
  margin-top: -5px;
  cursor: pointer;
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-left: 3px;
`;

const LinkContainer = styled.div`
  margin-left: 5px;
  margin-top: 5px;
`;

const Span = styled.div`
  height: 3px;
  width: 100px;
  background-color: ${({ theme }) => theme.color};
  margin-left: 3px;
  margin-top: 5px;
`;

const Title = styled.h1`
  font-family: ${(props) => props.theme.font};
  font-size: ${(props) => props.theme.text.md};
  color: black;
  font-weight: normal;
  text-align: left;
  margin: 0px 0px 0px 0px;
`;
