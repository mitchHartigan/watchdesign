import React from "react";
import styled from "styled-components";

export const TextLink = (props) => {
  const { children, destination, menu, header, newTab } = props;

  return (
    <Container menu={menu} header={header}>
      <Text
        href={destination}
        menu={menu}
        target={newTab ? "_blank" : ""}
        header={header}
      >
        {children}
      </Text>
    </Container>
  );
};

const Text = styled.a`
  font-family: ${({ theme }) => theme.font};
  font-size: ${({ theme, header }) => (header ? "medium" : theme.text.sm)};
  color: ${(props) => (props.menu ? "black" : "white")};
  cursor: pointer;
  text-decoration: none;
  margin: 0px 25px 0px 25px;
  ${({ theme, header }) => header && `color: ${theme.color}`};
  ${({ header }) => header && "margin: 0px 0px 0px 30px"};
  ${({ header }) => header && "font-weight: bold"};

  @media (max-width: 1200px) {
    ${({ header }) => header && "text-align: center;"}
  }

  @media (max-width: 800px) {
    ${({ header, theme }) => header && `font-size: ${theme.text.sm}`}
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: ${(props) => (props.menu ? "flex-start" : "center")};
  align-items: center;
`;
