import React from "react";
import styled from "styled-components";

import { Navbar } from "../components/navbar/Navbar";
import { Header } from "../components/header/Header";
import { Footer } from "../components/footer/Footer";
import { MarkdownLoader } from "../components/markdown/loader";

import LearnMorePath from "./LearnMore.md";

export default function LearnMore() {
  return (
    <Container>
      <Navbar />
      <Header />
      <CopyContainer>
        <MarkdownLoader path={LearnMorePath} />
      </CopyContainer>
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const CopyContainer = styled.div`
  height: 100%;
  max-width: 100vw;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 0px 70px 10px 55px;

  @media (max-width: 1500px) {
    overflow-y: scroll;
  }

  @media (max-width: 800px) {
    padding: 0px 15px 10px 15px;
  }
`;
