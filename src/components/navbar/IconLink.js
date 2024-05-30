import React from "react";
import styled from "styled-components";

export const IconLink = (props) => {
  const { destination, iconSrc, iconAlt } = props;

  return (
    <Container href={destination} target="_blank">
      <Icon src={iconSrc} alt={iconAlt} />
    </Container>
  );
};

const Container = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  margin: 0px 25px 0px 25px;
`;

const Icon = styled.img`
  margin-right: 10px;
  margin-left: 10px;
`;
