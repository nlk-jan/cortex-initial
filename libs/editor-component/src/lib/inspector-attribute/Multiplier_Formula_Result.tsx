import React from 'react';
import Image from 'next/image';

const Multiplier_Formula_Result = ({
  Col6,
  InpBox,
  image,
  Icon,
  SpanInp,
  Select,
  InpCaption,
  InpText,
  downSpanText,
}: any) => {
  return (
    <>
      <Col6>
        <InpBox>
          <Icon>
            <Image src={image} alt="Setting" />
          </Icon>
          <SpanInp>{InpText}</SpanInp>
        </InpBox>
        <Select>
          <option value="0"> </option>
          <option value="1"> Degrees </option>
          <option value="2"> Degrees </option>
        </Select>
        <InpCaption>{downSpanText}</InpCaption>
      </Col6>
    </>
  );
};

export default Multiplier_Formula_Result;
