import React, { useState } from "react";
import styled from "styled-components";

import { Title } from "../Title";
import { Package } from "./Package";
import VisibilitySensor from "react-visibility-sensor";
import { FadeIn } from "../FadeIn";
import { package1, package2, package3 } from "./data";

export const GraphicsPackages = (props) => {
  const { openModal, refProp } = props;
  const [visible, setVisible] = useState();

  return (
    <VisibilitySensor
      partialVisibility={true}
      onChange={(visible) => {
        if (visible) setVisible(true);
      }}
    >
      <Container ref={refProp}>
        <FadeIn delay="0" visible={visible}>
          <Title align="center" spanWidth="280px">
            Our Graphics Packages
          </Title>
        </FadeIn>
        <FadeIn delay="200" visible={visible}>
          <Text>A selection of graphics packages to choose from.</Text>
        </FadeIn>
        <FadeIn delay="400" visible={visible}>
          <PackagesContainer>
            <Package {...package1} openModal={openModal} />
            <Package {...package2} openModal={openModal} />
            <Package {...package3} openModal={openModal} />
          </PackagesContainer>
        </FadeIn>
      </Container>
    </VisibilitySensor>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5vh 0vw 6vh 0vw;
`;

const PackagesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 4vh;

  @media (max-width: 1450px) {
    flex-direction: column;
  }
`;

const Text = styled.p`
  font-family: ${({ theme }) => theme.font};
  font-size: ${({ theme }) => theme.text.sm};
  text-align: center;
  margin-top: 20px;

  @media (max-width: 900px) {
    padding: 0px 20px 0px 20px;
  }
`;
