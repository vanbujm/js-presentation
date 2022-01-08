import React from 'react';
import { StyledSlide } from './styledSlide';
import { FlexBox, Heading } from 'spectacle';

export const YouTubeSlide = () => (
  <StyledSlide>
    <FlexBox height="100%" flexDirection="column" zIndex={999}>
      <Heading margin="0px 32px" color="primary" fontSize="h3">
        Thanks!
      </Heading>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/YoZHqykR04k?autoplay=1"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      />
    </FlexBox>
  </StyledSlide>
);
