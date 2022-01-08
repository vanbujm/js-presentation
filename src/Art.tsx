import React from 'react';
import { StyledSlide } from './styledSlide';
import { FlexBox, Heading } from 'spectacle';

export const ArtSlide = () => (
  <StyledSlide>
    <FlexBox height="100%" flexDirection="column" zIndex={999}>
      <Heading margin="0px 32px" color="primary" fontSize="h3">
        I can embed my art!
      </Heading>
      <iframe width={500} height={570} frameBorder="0" src="https://www.dwitter.net/e/10750" />
    </FlexBox>
  </StyledSlide>
);
