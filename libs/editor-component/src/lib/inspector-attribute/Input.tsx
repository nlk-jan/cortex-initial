import React from 'react';
import { Icon } from '../atoms/Input';
import { InputTitle } from '../atoms/Input';
import { InputBox } from '../atoms/Input';
import Image from 'next/image';
import { InputMessage } from '../atoms/Input';
import { Input } from '../atoms/Input';

const InputText = ({ icon, title, placeHolder, helperText }: any) => {
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
