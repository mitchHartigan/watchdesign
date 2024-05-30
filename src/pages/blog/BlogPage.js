import React from "react";
import styled from "styled-components";

import { useParams } from "react-router-dom";
import { Navbar } from "../../components/navbar/Navbar";
import { Footer } from "../../components/footer/Footer";
import { manifest } from "./posts/postManifest";
import { Header } from "components/header/Header";
import { MarkdownLoader } from "components/markdown/loader";
import { BackButton } from "./BackButton";

export default function BlogPage() {
  const { canonTitle } = useParams();

  let data = null;

  data = manifest.find((blog) => {
    return blog.canonTitle === canonTitle;
  });

  if (data) {
    const { mdSrc } = data;

    return (
      <Page>
        <Navbar />
        <Header />
        <Container>
          <BackButton />
          <MarkdownLoader path={mdSrc} />
        </Container>
        <Footer />
      </Page>
    );
  }

  if (data === undefined) {
    return <p>Blog not found.</p>;
  }
}

const Container = styled.div`
  padding: 10px 20vw 20px 55px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  min-height: 100vh;
  width: 100%;
`;

const Page = styled.div``;
