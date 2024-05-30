import React from "react";
import styled from "styled-components";

export const Title = (props) => {
  const { align, containerStyles, textStyles, spanWidth, children } = props;

  return (
    <Container align={align} containerStyles={containerStyles}>
      <Text textStyles={textStyles}>{children}</Text>
      <Underline spanWidth={spanWidth} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${(props) => props.align};

  @media (max-width: 1450px) {
    align-items: center;
  }

  ${(props) => props.containerStyles};
`;

const Text = styled.div`
  font-family: ${({ theme }) => theme.font};
  font-size: ${({ theme }) => theme.text.xl};
  font-weight: 600;

  @media (max-width: 1600px) {
    font-size: ${({ theme }) => theme.text.lg};
  }

  ${(props) => props.textStyles};
`;

const Underline = styled.div`
  height: 4px;
  margin-top: 3px;
  width: ${(props) => props.spanWidth};
  background-color: ${({ theme }) => theme.color};
`;
