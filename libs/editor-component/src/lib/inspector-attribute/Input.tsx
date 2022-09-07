import React from 'react';
import { Icon as InputIcon } from '../atoms/Input';
import { InputTitle } from '../atoms/Input';
import { InputBox } from '../atoms/Input';
import Image from 'next/image';
import { InputMessage } from '../atoms/Input';
import { Input as InputText } from '../atoms/Input';
import { Composition } from 'atomic-layout';

const areasMobile = `
  icon
  title
  input
  helper
`;

const InputField = ({ icon, title, placeHolder, helperText }: any) => {
  return (
    <Composition areas={areasMobile}>
      {({ Icon, Title, Input, Helper }) => (
        <>
          <InputBox>
            <Icon>
              <InputIcon>
                <Image src={icon} />
              </InputIcon>
            </Icon>
            <Title>
              <InputTitle>{title}</InputTitle>
            </Title>
          </InputBox>
          <Input>
            <InputText type="text" placeholder={placeHolder} />
          </Input>
          <Helper>
            <InputMessage>{helperText}</InputMessage>
          </Helper>
        </>
      )}
    </Composition>
  );
};

export default InputField;
