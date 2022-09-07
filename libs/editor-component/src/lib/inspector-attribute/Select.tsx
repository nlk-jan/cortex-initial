import React from 'react';
import { Icon } from '../atoms/Input';
import { Select } from '../atoms/Select';
import { InputBox } from '../atoms/Input';
import { InputMessage } from '../atoms/Input';
import Image from 'next/image';
import { InputTitle } from '../atoms/Input';

const SelectBox = ({ icon, title, helperText, children }: any) => {
  return (
    <>
      <InputBox>
        <Icon>
          <Image src={icon} />
        </Icon>
        <InputTitle>{title}</InputTitle>
      </InputBox>
      <Select>{children}</Select>
      <InputMessage>{helperText}</InputMessage>
    </>
  );
};

export default SelectBox;
