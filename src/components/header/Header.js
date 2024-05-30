import React from "react";
import styled from "styled-components";

import { TextLink } from "components/navbar/TextLink";

export function Header() {
  return (
    <Container>
      <HeaderImg
        src="/hostworkspromo_banner_logo.jpeg"
        alt="Hostworks Promo Icon"
      />
      <TextLink newTab header destination="https://hostworkspromo.orders.com">
        {`Hostworks is designed to get you more booked nights ->`}
      </TextLink>
    </Container>
  );
}

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
