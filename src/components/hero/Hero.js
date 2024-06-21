import React from "react";
import styled from "styled-components";
import { HeroCopy } from "./HeroCopy";

export default function Hero(props) {
  return (
    <Container>
      <VideoContainer>
        <Video autoPlay muted loop id="testVideo">
          <source
            src="https://videos.pexels.com/video-files/15291803/15291803-hd_1920_1080_30fps.mp4#t=3"
            type="video/mp4"
          />
        </Video>
      </VideoContainer>
      <HeroCopy />
    </Container>
  );
}

const VideoContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const Video = styled.video`
  min-height: 100%;
  min-width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  object-fit: cover;
`;

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  /* background: lightgray;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  object-fit: none; */

  @media (max-width: 1450px) {
    align-items: center;
    width: 100%;
  }
`;
