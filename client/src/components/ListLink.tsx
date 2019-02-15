import React, { useState } from 'react';

import { DivColumnCenter, DivResponsive } from './base/div';
import { Link } from './Link';
import { IListLink } from '../types';
import { Actions } from './Actions';

export const ListLink = React.memo(() => {
  const [links, setLinks] = useState<IListLink>({ 0: { url: '' } });

  const removeLink = (indexToRemove: number) => () => {
    const newLinks = { ...links };
    delete newLinks[indexToRemove];
    setLinks(newLinks);
  };
  const changeLink = (index: number) => (url: string) => setLinks(Object.assign({}, links, { [index]: { url } }));

  const linksKey = Object.keys(links).map(index => parseInt(index, 10));
  const lastIndex = linksKey[linksKey.length - 1];

  return (
    <>
      <DivColumnCenter>
        {linksKey.map((index: any) => (
          <Link
            key={index}
            link={links[index]}
            hasRemoveBtn={index !== 0}
            hasAddBtn={lastIndex === index}
            handleAddClick={setLinks.bind(null, { ...links, [lastIndex + 1]: { url: '' } })}
            handleChange={changeLink(index)}
            handleRemoveClick={removeLink(index)}
          />
        ))}
        <Actions handleDownload={() => console.log('tst')} handleClearList={() => console.log('tst')} />
      </DivColumnCenter>
    </>
  );
});
