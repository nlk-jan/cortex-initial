import React from 'react';
import { Icon, InputBox, InputMessage, Select } from './styles';
import Image from 'next/image';
import { InputTitle } from './styles';

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
