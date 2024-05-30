import React, { useState } from "react";
import styled from "styled-components";
import { Menu } from "./Menu";

export function Hamburger(props) {
  const { homepage, scrollTo } = props;
  const [extend, setExtend] = useState(false);

  function toggleMenu() {
    setExtend(!extend);
  }

  function handleContact() {
    toggleMenu();
    scrollTo("contact", { behavior: "smooth", block: "center" });
  }

  if (!extend) {
    return (
      <Container onClick={toggleMenu}>
        <Line />
        <Line />
        <Line />
      </Container>
    );
  } else {
    return (
      <Menu
        toggleMenu={toggleMenu}
        homepage={homepage}
        handleContact={handleContact}
      />
    );
  }
}

const Container = styled.div`
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  background-color: white;
  position: fixed;
  z-index: 10;
  box-sizing: border-box;
  cursor: pointer;
  border-radius: 2px;
  box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.25);

  @media (max-width: 1450px) {
    display: flex;
  }
  margin: 15px 0vw 0vh 15px;
`;

const Line = styled.div`
  width: 70%;
  min-height: 3px;
  background-color: black;
  margin: 4px 0px 4px 0px;
`;
