import React, { useState } from 'react';

import { DivColumnCenter } from './base/div';
import { Link } from './Link';
import { ILink } from '../types';

export const ListLink = () => {
  const [links, setLinks] = useState<ILink[]>([{ url: '' }]);

  const removeLink = (indexToRemove: number) => () => setLinks(links.filter((link, index) => index !== indexToRemove));
  const changeLink = (index: number) => (url: string) => setLinks(Object.assign([], links, { [index]: { url } }));

  return (
    <DivColumnCenter>
      {links.map((link, index) => (
        <Link
          key={index}
          link={link}
          hasRemoveBtn={index !== 0}
          handleAddClick={setLinks.bind(null, [...links, { url: '' }])}
          handleChange={changeLink(index)}
          handleRemoveClick={removeLink(index)}
        />
      ))}
    </DivColumnCenter>
  );
};
