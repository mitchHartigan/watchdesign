import React from "react";
import styled from "styled-components";

import { Navbar } from "../../components/navbar/Navbar";
import { Footer } from "../../components/footer/Footer";

import Preview from "./Preview";
import { manifest } from "./posts/postManifest";
import { Header } from "components/header/Header";
import { Title } from "components/Title";

export default function BlogHub() {
  return (
    <Page>
      <Navbar />
      <Header />
      <Container>
        <Title
          containerStyles="margin: 20px 0px 10px 0px;"
          spanWidth="150px"
          align="center"
        >
          Hostworks Blog
        </Title>
        {manifest.map((blog) => {
          return <Preview key={blog.title} {...blog} />;
        })}
      </Container>
      <Footer />
    </Page>
  );
}

const Page = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.backgroundColor};
`;

const Container = styled.div`
  padding: 10px 0px 30px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
