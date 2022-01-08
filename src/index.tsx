import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';

import {
  Appear,
  Box,
  CodePane,
  CodeSpan,
  Deck,
  FlexBox,
  Grid,
  Heading,
  Image,
  ListItem,
  MarkdownSlide,
  MarkdownSlideSet,
  OrderedList,
  Text,
  UnorderedList,
} from 'spectacle';
import { template } from './template';
import { SlideFragments } from './slideFragments';
import { StyledSlide } from './styledSlide';
import { Mesmerize } from './Mesmerize';

const MetaSlide = React.lazy(() => import('./MetaSlide'));

const formidableLogo = 'https://avatars2.githubusercontent.com/u/5078602?s=280&v=4';

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
    <StyledSlide
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
      backgroundColor="tertiary"
      backgroundImage="url(https://github.com/FormidableLabs/dogs/blob/main/src/beau.jpg?raw=true)"
      backgroundOpacity={0.5}
    >
      <Heading>Custom Backgrounds</Heading>
      <UnorderedList>
        <ListItem>
          <CodeSpan>backgroundColor</CodeSpan>
        </ListItem>
        <ListItem>
          <CodeSpan>backgroundImage</CodeSpan>
        </ListItem>
        <ListItem>
          <CodeSpan>backgroundOpacity</CodeSpan>
        </ListItem>
        <ListItem>
          <CodeSpan>backgroundSize</CodeSpan>
        </ListItem>
        <ListItem>
          <CodeSpan>backgroundPosition</CodeSpan>
        </ListItem>
        <ListItem>
          <CodeSpan>backgroundRepeat</CodeSpan>
        </ListItem>
      </UnorderedList>
    </StyledSlide>
    <StyledSlide>
      <Heading>Animated Elements</Heading>
      <OrderedList>
        <Appear>
          <ListItem>Elements can animate in!</ListItem>
        </Appear>
        <Appear>
          <ListItem>Out of order</ListItem>
        </Appear>
        <Appear priority={0}>
          <ListItem>
            Just identify the order with the prop <CodeSpan>priority</CodeSpan>!
          </ListItem>
        </Appear>
      </OrderedList>
    </StyledSlide>
    <StyledSlide>
      <FlexBox>
        <Text>These</Text>
        <Text>Text</Text>
        <Text color="secondary">Items</Text>
        <Text fontWeight="bold">Flex</Text>
      </FlexBox>
      <Grid gridTemplateColumns="1fr 2fr" gridColumnGap={15}>
        <Box backgroundColor="primary">
          <Text color="secondary">Single-size Grid Item</Text>
        </Box>
        <Box backgroundColor="secondary">
          <Text>Double-size Grid Item</Text>
        </Box>
      </Grid>
      <Grid
        gridTemplateColumns="1fr 1fr 1fr"
        gridTemplateRows="1fr 1fr 1fr"
        alignItems="center"
        justifyContent="center"
        gridRowGap={1}
      >
        {Array(9)
          .fill('')
          .map((_, index) => (
            <FlexBox paddingTop={0} key={`formidable-logo-${index}`} flex={1}>
              <Image src={formidableLogo} width={100} />
            </FlexBox>
          ))}
      </Grid>
    </StyledSlide>
    <SlideFragments />
    <StyledSlide>
      <CodePane language="jsx">{`
        import { createClient, Provider } from 'urql';

        const client = createClient({ url: 'https://0ufyz.sse.codesandbox.io' });

        const App = () => (
          <Provider value={client}>
            <Todos />
          </Provider>
        );
        `}</CodePane>
      <Box height={20} />
      <CodePane language="java" showLineNumbers={false}>{`
        public class NoLineNumbers {
          public static void main(String[] args) {
            System.out.println("Hello");
          }
        }
        `}</CodePane>
    </StyledSlide>
    <div>
      <StyledSlide>
        <Heading>This is a slide embedded in a div</Heading>
      </StyledSlide>
    </div>
    <MarkdownSlide componentProps={{ color: 'yellow' }}>
      {`
        # This is a Markdown Slide

        - You can pass props down to all elements on the slide.
        - Just use the \`componentProps\` prop.
        `}
    </MarkdownSlide>
    <MarkdownSlide animateListItems>
      {`
       # This is also a Markdown Slide

       It uses the \`animateListItems\` prop.

       - Its list items...
       - ...will appear...
       - ...one at a time.
      `}
    </MarkdownSlide>
    <StyledSlide>
      <Grid flex={1} gridTemplateColumns="50% 50%" gridTemplateRows="50% 50%" height="100%">
        <FlexBox alignItems="center" justifyContent="center">
          <Heading>This is a 4x4 Grid</Heading>
        </FlexBox>
        <FlexBox alignItems="center" justifyContent="center">
          <Text textAlign="center">With all the content aligned and justified center.</Text>
        </FlexBox>
        <FlexBox alignItems="center" justifyContent="center">
          <Text textAlign="center">
            It uses Spectacle <CodeSpan>{'<Grid />'}</CodeSpan> and <CodeSpan>{'<FlexBox />'}</CodeSpan> components.
          </Text>
        </FlexBox>
        <FlexBox alignItems="center" justifyContent="center">
          <Box width={200} height={200} backgroundColor="secondary" />
        </FlexBox>
      </Grid>
    </StyledSlide>
    <MarkdownSlideSet>
      {`
        # This is the first slide of a Markdown Slide Set
        ---
        # This is the second slide of a Markdown Slide Set
        `}
    </MarkdownSlideSet>
  </Deck>
);

ReactDOM.render(<Presentation />, document.getElementById('root'));
