import React, { useState } from 'react';
import { ButtonPrimary, ButtonSecondary } from './base/button';
import { Input100Width } from './base/input';
import { DivResponsive } from './base/div';

import { FaPlusCircle, FaMinusCircle } from 'react-icons/fa';

interface Props {
  link: string;
  hasRemoveBtn: boolean;
  hasAddBtn: boolean;
  handleAddClick: () => void;
  handleRemoveClick: () => void;
  handleChange: (url: string) => void;
}

export const Link = ({
  link: url,
  hasRemoveBtn,
  hasAddBtn,
  handleAddClick,
  handleRemoveClick,
  handleChange,
}: Props) => {
  const [link, setLink] = useState(url);

  return (
    <DivResponsive>
      <Input100Width
        type='text'
        value={link}
        onChange={({ target: { value = '' } }) => setLink(value)}
        onBlur={({ target: { value = '' } }) => handleChange(value)}
      />
      <ButtonPrimary onClick={handleAddClick} disabled={!hasAddBtn}>
        <FaPlusCircle />
      </ButtonPrimary>
      <ButtonSecondary onClick={handleRemoveClick} disabled={!hasRemoveBtn}>
        <FaMinusCircle />
      </ButtonSecondary>
    </DivResponsive>
  );
};
