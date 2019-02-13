import React, { useState } from 'react';
import { ILink } from '../types';
import { Button } from './base/button';
import { Input } from './base/input';
import { DivCenterSpaceBetween } from './base/div';

interface Props {
  link: ILink;
  hasRemoveBtn: boolean;
  handleAddClick: () => void;
  handleRemoveClick: () => void;
  handleChange: (url: string) => void;
}

const styles = {
  minWidth: '300px',
};

export const Link = ({ link: { url }, hasRemoveBtn, handleAddClick, handleRemoveClick, handleChange }: Props) => {
  const [link, setLink] = useState(url);

  return (
    <DivCenterSpaceBetween style={styles}>
      <Input
        type='text'
        value={link}
        onChange={({ target: { value = '' } }) => setLink(value)}
        onBlur={({ target: { value = '' } }) => handleChange(value)}
      />
      <Button onClick={handleAddClick}>+</Button>
      <Button onClick={handleRemoveClick} disabled={!hasRemoveBtn}>
        -
      </Button>
    </DivCenterSpaceBetween>
  );
};
