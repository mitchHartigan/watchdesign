import React from "react";
import styled from "styled-components";
import { ContactInfo } from "./ContactInfo";

export const Footer = (props) => {
  return (
    <FooterContainer>
      <InfoContainer>
        <Image src="/hostworks_footer.png" />
        <ContactInfo />
      </InfoContainer>
      <Bar />
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  margin: 40px 0px 30px 0px;

  @media (max-width: 1450px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Image = styled.img``;

const Bar = styled.div`
  width: 100%;
  background-color: black;
  height: 25px;
`;
