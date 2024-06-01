import React from "react";
import styled from "styled-components";

import { Summary } from "./Summary";

const visitorData = {
  imgSrc: "new_era_watch.png",
  imgAlt: "watch image",
  title: "Lorem ipsum dolor sit amet",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquam libero augue, maximus efficitur mauris sollicitudin tempus. Phasellus consequat purus blandit eleifend posuere. Ut non arcu lobortis.",
  buttonText: "View our Inventory",
  buttonLink:
    "https://www.amazon.com/s?me=A28BONMGJJPBEQ&marketplaceID=ATVPDKIKX0DER",
};

// link to main Graphics Package page once it has been updated by SAGE team.
const impressionData = {
  imgSrc: "engineering.png",
  imgAlt: "Eugene Oasis branded products.",
  title: "Lorem ipsum dolor sit amet",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquam libero augue, maximus efficitur mauris sollicitudin tempus. Phasellus consequat purus blandit eleifend posuere. Ut non arcu lobortis.",
  buttonText: "Learn More",
  buttonLink: "/learn-more",
};

const referralsData = {
  imgSrc: "astro_watch.png",
  imgAlt: "Eugene Oasis logo converting to 5 star reviews",
  title: "Lorem ipsum dolor sit amet",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquam libero augue, maximus efficitur mauris sollicitudin tempus. Phasellus consequat purus blandit eleifend posuere. Ut non arcu lobortis.",
  buttonText: "View our Inventory",
  buttonLink:
    "https://www.amazon.com/s?me=A28BONMGJJPBEQ&marketplaceID=ATVPDKIKX0DER",
};

function redirectTo(link) {
  window.location.href = link;
}

export const ContentBlocks = (props) => {
  const { scrollTo } = props;

  return (
    <Container>
      <Summary
        data={visitorData}
        buttonType="redirect"
        handleClick={() => redirectTo(visitorData.buttonLink)}
      />
      <Summary
        data={impressionData}
        swap
        buttonType="redirect"
        handleClick={() => redirectTo(impressionData.buttonLink)}
      />
      <Summary
        data={referralsData}
        buttonType="redirect"
        handleClick={() => redirectTo(referralsData.buttonLink)}
      />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.backgroundColor};
  padding: 3vh 0vw 3vh 0vw;
`;
