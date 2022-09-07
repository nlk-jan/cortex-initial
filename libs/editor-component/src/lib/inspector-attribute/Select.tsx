import React from 'react';
import { Icon as InputIcon } from '../atoms/Input';
import { Select } from '../atoms/Select';
import { InputBox } from '../atoms/Input';
import { InputMessage } from '../atoms/Input';
import Image from 'next/image';
import { InputTitle } from '../atoms/Input';
import { Composition } from 'atomic-layout';

const areasMobile = `
  SelectIcon
  SelectTitle
  SelectAtom
  SelectHelper
`;

const SelectBox = ({ icon, title, helperText, children }: any) => {
  return (
    <Composition areas={areasMobile}>
      {({ SelectIcon, SelectTitle, SelectValue, SelectHelper }) => (
        <>
          <InputBox>
            <SelectIcon>
              <InputIcon>
                <Image src={icon} />
              </InputIcon>
            </SelectIcon>
            <SelectTitle>
              <InputTitle>{title}</InputTitle>
            </SelectTitle>
          </InputBox>
          <SelectValue>
            <Select>{children}</Select>
          </SelectValue>
          <SelectHelper>
            <InputMessage>{helperText}</InputMessage>
          </SelectHelper>
        </>
      )}
    </Composition>
  );
};

export default SelectBox;
