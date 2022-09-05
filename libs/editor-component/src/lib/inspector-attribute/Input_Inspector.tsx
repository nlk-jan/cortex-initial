import Image from 'next/image';

const Input_Inspector = ({
  Col6,
  InpBox,
  Icon,
  settingIcon,
  SpanInp,
  Input,
  InpCaption,
  InpText,
  placeHolder,
  downSpanText,
}: any) => {
  return (
    <>
      <Col6>
        <InpBox>
          <Icon>
            <Image src={settingIcon} alt="Setting" />
          </Icon>
          <SpanInp>{InpText}</SpanInp>
        </InpBox>
        <Input type="text" placeholder={placeHolder} />
        <InpCaption>{downSpanText} </InpCaption>
      </Col6>
    </>
  );
};

export default Input_Inspector;
