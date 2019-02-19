import { useState } from 'react';
import { IListLink } from '../types';

export const useLinksState = () => {
  let initialLinks: IListLink = { 0: '' };

  if (localStorage.getItem('links') === null) {
    localStorage.setItem('links', JSON.stringify(initialLinks));
  } else {
    initialLinks = JSON.parse(localStorage.getItem('links') as string) as IListLink;
  }

  const [links, _setLinks] = useState<IListLink>(initialLinks);

  const setLinks = (newLinks: IListLink) => {
    localStorage.setItem('links', JSON.stringify(newLinks));
    _setLinks(newLinks);
  };

  return [links, setLinks] as [IListLink, (newLinks: IListLink) => void];
};
