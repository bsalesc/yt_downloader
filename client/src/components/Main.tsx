import React from 'react';
import { IconContext } from 'react-icons';

import { Header } from './Header';
import { ListLink } from './ListLink';

export const Main = () => (
  <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
    <Header />
    <ListLink />
  </IconContext.Provider>
);
