import React from "react";
import styled from "styled-components";

import { TextLink } from "components/navbar/TextLink";

export function Header() {
  return (
    <Container>
      <LogoTitle>WatchDesign</LogoTitle>
      <TextLink
        newTab
        header
        destination="https://www.ebay.com/str/sciencewatches"
      >
        {`Timeless Technology ->`}
      </TextLink>
    </Container>
  );
}

const LogoTitle = styled.p`
  margin: 0px;
  font-weight: medium;
  font-family: ${(props) => props.theme.font};
  font-size: 2.5rem;
`;

const Container = styled.div`
  background-color: white;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  width: 100%;
  box-shadow: 1px 1px 3px 1px lightgray;

  padding-top: 65px;
  padding-left: 43px;
  padding-bottom: 15px;
  box-sizing: border-box;

  @media (max-width: 1450px) {
    padding-top: 0px;
    padding-left: 0px;
    align-items: center;
    flex-direction: column;
    padding-top: 15px;
  }
`;

const HeaderImg = styled.img`
  height: auto;
  width: 350px;

  @media (max-width: 1200px) {
    width: 250px;
  }
`;
