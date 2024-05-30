import React from "react";
import styled from "styled-components";

export function BackButton(props) {
  //   const { destination } = props;

  return (
    <Container>
      <Button href={"/blog"}>{`< Back`}</Button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  box-sizing: border-box;
  padding: 38px 30px 0px 0px;
`;

const Button = styled.a`
  font-family: ${({ theme }) => theme.font};
  text-decoration: none;
  font-size: 20px;
  min-width: 90px;
  color: black;
`;
