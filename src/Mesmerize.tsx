import { FlexBox, Heading, Slide } from 'spectacle';
import React from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const colorCycle = keyframes`
  0% {
    background-position: 100% 100%;
  }
  50% {
    background-position: 100% 0%;
  }
  100% {
    background-position: 100% 100%;
  }
`;

export const AnimatedSlide = styled(Slide)`
  &:after {
    position: absolute;
    content: '';
    height: 100%;
    width: 100%;
    background: linear-gradient(180deg, hsl(355, 100%, 50%) 0%, rgb(129, 0, 138) 100%);
    background-size: 200% 200%;
    background-position: 0% 100%;
    animation: ${colorCycle} 5s ease infinite reverse;
  }
`;

export const Mesmerize = () => (
  <AnimatedSlide>
    <FlexBox height="100%" flexDirection="column" zIndex={999}>
      <Heading margin="0px 32px" color="primary" fontSize="h3">
        My Slides will mesmerize you
      </Heading>
    </FlexBox>
  </AnimatedSlide>
);
