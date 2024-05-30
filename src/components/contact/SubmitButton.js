import React from "react";
import styled from "styled-components";
import { Spinner } from "./Spinner";

export const SubmitButton = (props) => {
  const { submitted, onClick } = props;

  if (!submitted) {
    return <Button onClick={onClick}>Submit</Button>;
  }
  return <Spinner />;
};

const Button = styled.button`
  min-width: 180px;
  width: 100%;
  padding: 8px 30px 8px 30px;
  background-color: ${(props) => props.theme.color};
  color: black;
  font-family: ${(props) => props.theme.font};
  font-size: ${(props) => props.theme.text.xs};
  font-weight: 400;
  cursor: pointer;
  border: none;
  outline: none;
  border-radius: 3px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);

  &:hover {
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.35);
    transform: translate(0px, -1px);
  }

  transition: box-shadow 100ms ease;
  transition: transform 100ms ease;
`;
