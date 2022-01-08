import React from 'react';
import { Slide } from 'spectacle';
import styled from '@emotion/styled';

export const StyledBaseSlide = styled(Slide)`
  background: linear-gradient(180deg, #ff006a 0%, rgb(129, 0, 138) 100%);
`;

export const StyledSlide = (props: any) => (
  <StyledBaseSlide
    transition={{
      from: {
        transform: 'scale(0.5) rotate(45deg)',
        opacity: 0,
      },
      enter: {
        transform: 'scale(1) rotate(0)',
        opacity: 1,
      },
      leave: {
        transform: 'scale(0.2) rotate(315deg)',
        opacity: 0,
      },
    }}
    {...props}
  />
);
