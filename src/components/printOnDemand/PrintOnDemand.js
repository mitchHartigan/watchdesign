import React, { useState } from "react";
import styled from "styled-components";

import { Title } from "../Title";
import { ProductCard } from "./ProductCard";

import VisibilitySensor from "react-visibility-sensor";
import { FadeIn } from "../FadeIn";

const businessCardData = {
  imgSrc: "oasis_business_card.png",
  imgAlt: "Eugene Oasis Business Card",
  name: "Business Card, Rounded, 2 Sided",
};

const bookmarkData = {
  imgSrc: "oasis_bookmarks.png",
  imgAlt: "Eugene Oasis Bookmarks",
  name: "Bookmarks, 2.25 x 8.25, 2 Sided",
};

const memoPadData = {
  imgSrc: "oasis_memo_pad.png",
  imgAlt: "Eugene Oasis memo pad product",
  name: "Memo Pad, 4.25 x 5.5",
};

const playingCardData = {
  imgSrc: "oasis_playing_cards.png",
  imgAlt: "Eugene Oasis playing cards",
  name: "Playing Cards",
};

export const PrintOnDemand = () => {
  const [visible, setVisible] = useState();

  return (
    <VisibilitySensor
      partialVisibility={true}
      onChange={(visibile) => {
        if (visibile) setVisible(true);
      }}
    >
      <Container>
        <FadeIn delay="0" visible={visible}>
          <Title align="center" spanWidth="207px">
            Print on Demand
          </Title>
        </FadeIn>
        <FadeIn delay="200" visible={visible}>
          <Text>Low order minimums and fast turnarounds.</Text>
        </FadeIn>
        <FadeIn delay="400" visible={visible}>
          <ProductCardContainer>
            <ProductCard {...businessCardData} />
            <ProductCard {...bookmarkData} />
            <ProductCard {...memoPadData} />
            <ProductCard {...playingCardData} />
          </ProductCardContainer>
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
  width: 100%;
  margin: 12vh 0vw 15vh 0vw;

  @media (max-width: 900px) {
    margin: 40px 0px 70px 0px;
  }
`;

const ProductCardContainer = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 1450px) {
    flex-direction: column;
  }
`;

const Text = styled.p`
  font-family: ${({ theme }) => theme.font};
  font-size: ${({ theme }) => theme.text.sm};
  margin-bottom: 5vh;
`;
