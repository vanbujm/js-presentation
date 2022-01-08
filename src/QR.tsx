import React from 'react';
import { StyledSlide } from './styledSlide';
import { FlexBox, Heading, Image } from 'spectacle';

import QRCode from './qr-code.png';

export const QRSlide = () => (
  <StyledSlide>
    <FlexBox height="100%" flexDirection="column" zIndex={999}>
      <Heading margin="0px 32px" color="primary" fontSize="h3">
        Thanks!
      </Heading>
      <Image src={QRCode} height={500} width={500} />
    </FlexBox>
  </StyledSlide>
);
