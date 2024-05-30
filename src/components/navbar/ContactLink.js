import React from "react";
import styled from "styled-components";

export function ContactLink(props) {
  const { homepage, handleClick, hamburger } = props;

  if (!homepage) {
    return (
      <Link hamburger={hamburger} href="/#contact">
        Contact
      </Link>
    );
  }

  return (
    <ContactButton hamburger={hamburger} onClick={handleClick}>
      Contact
    </ContactButton>
  );
}

const Link = styled.a`
  color: ${({ hamburger }) => (hamburger ? "black" : "white")};
  font-family: ${({ theme }) => theme.font};
  font-size: medium;
  cursor: pointer;
  text-decoration: none;
  margin: 0px 25px 0px 25px;
`;

const ContactButton = styled.button`
  font-family: ${({ theme }) => theme.font};
  font-size: medium;
  color: ${({ hamburger }) => (hamburger ? "black" : "white")};
  cursor: pointer;
  text-decoration: none;
  margin: 0px 25px 0px 20px;
  background-color: transparent;
  border: none;

  @media (max-width: 1200px) {
    ${({ header }) => header && "text-align: center;"}
  }

  @media (max-width: 800px) {
    ${({ header, theme }) => header && `font-size: ${theme.text.sm}`}
  }
`;
