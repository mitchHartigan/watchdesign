import React from "react";
import styled from "styled-components";

export const Button = (props) => {
  const { handleClick, children } = props;
  return <ButtonEl onClick={handleClick}>{children}</ButtonEl>;
};

const ButtonEl = styled.button`
  margin-top: 10px;
  padding: 5px 20px 5px 20px;
  background-color: white;
  font-family: ${({ theme }) => theme.font};
  font-size: ${({ theme }) => theme.text.md};
  font-weight: 500;
  border-radius: 10px;
  border: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  transition: transform 100ms ease;

  &:hover {
    transform: translate(0px, -2px);
  }
  transition: transform 100ms ease;

  @media (max-width: 900px) {
    font-size: ${({ theme }) => theme.text.sm};
  }
`;
