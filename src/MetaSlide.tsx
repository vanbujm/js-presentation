import { CodePane, FlexBox, Heading } from 'spectacle';
import React, { useCallback, useEffect, useState } from 'react';

export const MetaSlide = () => {
  const [data, setData] = useState('Loading...');

  const getIndex = useCallback(() => {
    fetch('./0.deck.js').then((response) => {
      if (response.status !== 200) {
        return;
      }
      response.text().then(function (data) {
        const lines = data.split('\n');

        if (lines.length > 25) {
          const start = Math.floor((lines.length - 25) / 2);
          const linesToShow = lines.slice(start, start + 20);
          setData(linesToShow.join('\n'));
        } else {
          setData(data);
        }
      });
    });
  }, []);

  useEffect(() => {
    getIndex();
  }, [getIndex]);

  return (
    <FlexBox height="100%" flexDirection="column">
      <Heading margin="0px 32px" color="primary" fontSize="h3">
        My Slides display the code for my slides
      </Heading>
      <CodePane language="javascript" showLineNumbers={false}>
        {data}
      </CodePane>
    </FlexBox>
  );
};

export default MetaSlide;
