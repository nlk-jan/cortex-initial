import React from 'react';
import Image from 'next/image';

const MultiplierFormulaResult = ({
  Col_6,
  InputBox,
  image,
  Icon,
  InputTitle,
  Select,
  InputMessage,
  InputText,
  inputCaption,
}: any) => {
  return (
    <>
      <Col_6>
        <InputBox>
          <Icon>
            <Image src={image} alt="Setting" />
          </Icon>
          <InputTitle>{InputText}</InputTitle>
        </InputBox>
        <Select>
          <option value="0"> Degrees </option>
          <option value="1"> Degrees </option>
        </Select>
        <InputMessage>{inputCaption}</InputMessage>
      </Col_6>
    </>
  );
};

export default MultiplierFormulaResult;
