import { FlexBox, Heading } from 'spectacle';
import React, { useEffect, useState } from 'react';
import { StyledSlide } from './styledSlide';

export const WebSlide = () => {
  const [url, setUrl] = useState('');
  const [data, setData] = useState('');

  useEffect(() => {
    (async () => {
      const response = await fetch(`https://warm-reaches-67310.herokuapp.com/${url}`);

      if (response.status !== 200) return;

      const data = await response.text();
      setData(data);
    })();
  }, [url]);

  return (
    <StyledSlide>
      <FlexBox height="100%" flexDirection="column">
        <Heading margin="0px 32px" color="primary" fontSize="h3">
          Web Slide
        </Heading>
        <input type={'text'} onBlur={(e) => setUrl(e.target.value)} />
        {url !== '' && <div dangerouslySetInnerHTML={{ __html: data }} />}
      </FlexBox>
    </StyledSlide>
  );
};
