import React, { useState } from 'react';

import { DivColumnCenter } from './base/div';
import { Link } from './Link';
import { Actions } from './Actions';

import { useLinksState } from '../states/links';
import { downloadVideos } from '../utils';

export const ListLink = React.memo(() => {
  const [links, setLinks] = useLinksState();
  const linksKey = Object.keys(links).map(index => parseInt(index, 10));
  const urls = linksKey.map(key => links[key]).filter(link => link.trim() !== '');
  const lastIndex = linksKey[linksKey.length - 1];

  const removeLink = (indexToRemove: number) => () => {
    const newLinks = { ...links };
    delete newLinks[indexToRemove];
    setLinks(newLinks);
  };
  const handleDownload = () => downloadVideos(urls);
  const changeLink = (index: number) => (url: string) => setLinks(Object.assign({}, links, { [index]: url }));
  const handleClearList = () => {
    const newLinks = { ...links };
    linksKey.forEach((index: any) => (index === 0 ? (newLinks[index] = '') : delete newLinks[index]));
    setLinks(newLinks);
  };

  return (
    <>
      <DivColumnCenter>
        {linksKey.map((index: any) => (
          <Link
            key={index}
            link={links[index]}
            hasRemoveBtn={index !== 0}
            hasAddBtn={lastIndex === index}
            handleAddClick={setLinks.bind(null, { ...links, [lastIndex + 1]: '' })}
            handleChange={changeLink(index)}
            handleRemoveClick={removeLink(index)}
          />
        ))}
        <Actions
          downloadDisabled={urls.length === 0}
          handleDownload={handleDownload}
          handleClearList={handleClearList}
        />
      </DivColumnCenter>
    </>
  );
});
