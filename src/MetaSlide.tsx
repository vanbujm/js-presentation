import { CodePane, FlexBox, Heading } from 'spectacle';
import React, { useCallback, useState } from 'react';
import { GetCodeButton } from './GetCodeButton';

export const MetaSlide = () => {
  const [data, setData] = useState('');

  const getCode = useCallback(async () => {
    const response = await fetch('./0.deck.js');

    if (response.status !== 200) return;

    const data = await response.text();
    const lines = data.split('\n');

    const start = 49;
    const linesToShow = lines.slice(start, start + 20);
    setData(linesToShow.join('\n'));
  }, []);

  return (
    <FlexBox height="100%" flexDirection="column">
      <Heading margin="0px 32px" color="primary" fontSize="h3">
        My slides display the code for my slides
      </Heading>
      {data === '' && <GetCodeButton onClick={getCode}>Get Code!</GetCodeButton>}
      {data !== '' && (
        <CodePane language="javascript" showLineNumbers={false}>
          {data}
        </CodePane>
      )}
    </FlexBox>
  );
};

export default MetaSlide;
