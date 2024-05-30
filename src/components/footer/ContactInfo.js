import React from "react";
import styled from "styled-components";

export const ContactInfo = (props) => {
  return (
    <Container>
      <Title>HostWorksPromo</Title>
      <Subtitle href="mailto:sales@hostworkspromo.com">
        sales@hostworkspromo.com
      </Subtitle>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 0px 20px 0px 20px;
`;

const Title = styled.h3`
  font-size: ${({ theme }) => theme.text.lg};
  font-family: ${({ theme }) => theme.font};
  margin-bottom: 5px;
`;

const Subtitle = styled.a`
  font-family: ${({ theme }) => theme.font};
  font-size: ${({ theme }) => theme.text.sm};
  text-decoration: none;
  color: black;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.color};
  }
`;
