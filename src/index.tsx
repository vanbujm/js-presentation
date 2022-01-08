import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';

import { Deck, FlexBox, Heading, Image } from 'spectacle';
import { template } from './template';
import { StyledSlide } from './styledSlide';
import { Mesmerize } from './Mesmerize';
import { WebSlide } from './WebSlide';
import { ArtSlide } from './Art';
import { YouTubeSlide } from './YouTube';

const MetaSlide = React.lazy(() => import('./MetaSlide'));

const theme = {
  colors: {
    primary: 'rgba(51,51,51,0.8)',
    secondary: 'rgba(51,51,51,0.8)',
  },
  fonts: {
    header: '"Oxygen", Helvetica, Arial, sans-serif',
    text: '"Oxygen", Helvetica, Arial, sans-serif',
  },
};

const Presentation = () => (
  <Deck theme={theme} template={template}>
    <StyledSlide>
      <FlexBox justifyContent={'center'} alignItems={'center'} flexDirection={'column'}>
        <Heading>💀I wrote this presentation in JavaScript💀</Heading>
        <Image src={'https://avatars.githubusercontent.com/u/2577981?v=4'} />
      </FlexBox>
    </StyledSlide>
    <Mesmerize />
    <StyledSlide>
      <Suspense
        fallback={
          <FlexBox justifyContent={'center'} alignItems={'center'} flexDirection={'column'}>
            <Heading>Loading...</Heading>
          </FlexBox>
        }
      >
        <MetaSlide />
      </Suspense>
    </StyledSlide>
    <ArtSlide />
    <WebSlide />
    <YouTubeSlide />
  </Deck>
);

ReactDOM.render(<Presentation />, document.getElementById('root'));
