import React, { useState } from "react";
import { Title } from "components/Title";
import VisibilitySensor from "react-visibility-sensor";
import { FadeIn } from "../FadeIn";
import styled from "styled-components";

import Form from "./Form";

export default function Contact(props) {
  const { interest, refProp } = props;
  const [visible, setVisible] = useState(false);

  return (
    <VisibilitySensor
      partialVisibility={true}
      onChange={(visible) => {
        if (visible) setVisible(true);
      }}
    >
      <Container ref={refProp}>
        <FadeIn delay="0" visible={visible}>
          <Title
            containerStyles="margin-bottom: 40px;"
            align="center"
            spanWidth="120px"
          >
            Contact Us
          </Title>
        </FadeIn>
        <FadeIn delay="300" visible={visible}>
          <Form interest={interest} />
        </FadeIn>
      </Container>
    </VisibilitySensor>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
