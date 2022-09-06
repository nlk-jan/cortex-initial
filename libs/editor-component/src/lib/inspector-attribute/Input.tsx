import React from 'react';
import { Icon, InputBox, InputMessage, InputTitle } from './styles';
import Image from 'next/image';
import { Input } from './styles';

const InputText = ({ icon, title, placeHolder, helperText, type }: any) => {
  return (
    <>
      <InputBox>
        <Icon>
          <Image src={icon} />
        </Icon>
        <InputTitle>{title}</InputTitle>
      </InputBox>
      <Input type="text" placeholder={placeHolder} />
      <InputMessage>{helperText}</InputMessage>
    </>
  );
};

export default InputText;
