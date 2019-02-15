import React from 'react';
import { DivColumnCenter } from './base/div';
import { TitleHeader, DescriptionHeader } from './base/header';

export const Header = React.memo(() => (
  <DivColumnCenter>
    <TitleHeader>Yt Downloader</TitleHeader>
    <DescriptionHeader>Paste the yt urls below</DescriptionHeader>
  </DivColumnCenter>
));
