import React, { useState } from 'react';

import { DivColumnCenter, DivResponsive } from './base/div';
import { Link } from './Link';
import { IListLink } from '../types';
import { Actions } from './Actions';

export const ListLink = React.memo(() => {
  const [links, setLinks] = useState<IListLink>({ 0: '' });
  const linksKey = Object.keys(links).map(index => parseInt(index, 10));
  const lastIndex = linksKey[linksKey.length - 1];

  const removeLink = (indexToRemove: number) => () => {
    const newLinks = { ...links };
    delete newLinks[indexToRemove];
    setLinks(newLinks);
  };
  const changeLink = (index: number) => (url: string) => setLinks(Object.assign({}, links, { [index]: url }));
  const handleDownload = async () => {
    const urls = linksKey.map(link => links[link]);
    const files = await fetch('http://localhost:8001/download/mp3', { method: 'POST', body: JSON.stringify(urls) });
  };
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
        <Actions handleDownload={handleDownload} handleClearList={handleClearList} />
      </DivColumnCenter>
    </>
  );
});
