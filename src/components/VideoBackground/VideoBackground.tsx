import React from 'react';
import styled from 'styled-components';

interface VideoBackgroundProps {
  videoSource: string;
  children?: React.ReactNode;
}

const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh; /* Height as needed to fill the entire section */
  overflow: hidden;
`;

const Video = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: blur(2px) saturate(1) brightness(0.5)  sepia(5%) brightness(1.1) contrast(0.9) invert(10%)  drop-shadow(0px 0px 30px #1BC46E);
`;



const VideoBackground: React.FC<VideoBackgroundProps> = ({ videoSource, children }) => {
  return (
    <VideoContainer>
      <Video autoPlay loop muted playsInline style={{ filter: 'blur(8px) saturate(1) brightness(0.5)  sepia(5%) brightness(1.1) contrast(0.9) invert(10%)  drop-shadow(0px 0px 30px #1BC46E)' }}>
        <source src={videoSource} type="video/mp4" />
      </Video>
      {children}
    </VideoContainer>
  );
};

export default VideoBackground;
