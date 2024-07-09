import React from "react";
import styled from "styled-components";

import { Summary } from "./Summary";

const visitorData = {
  imgSrc: "new_era_watch.png",
  imgAlt: "watch image",
  title: "WatchDesign",
  description: "Timeless Technology",
  buttonText: "Learn More",
  buttonLink: "/learn-more",
};

// link to main Graphics Package page once it has been updated by SAGE team.
const impressionData = {
  imgSrc: "engineering.png",
  imgAlt: "Eugene Oasis branded products.",
  title: "Private Label Design, Engineering and Production",
  description: "Custom, Private Label and Promotional opportunities",
  buttonText: "Contact Us",
  buttonLink: "/",
};

const referralsData = {
  imgSrc: "astro_watch.png",
  imgAlt: "Eugene Oasis logo converting to 5 star reviews",
  title: "Our Inventory",
  description: "Click here to purchase INVENTORY products",
  buttonText: "View Inventory",
  buttonLink: "/inventory",
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
        buttonType="scroll"
        handleClick={() =>
          scrollTo("contact", { behavior: "smooth", block: "center" })
        }
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
