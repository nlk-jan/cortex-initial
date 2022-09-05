import Image from 'next/image';

const Multiplier_Formula = ({
  Row,
  ImgText,
  Icon,
  SpanInp,
  MultiplierInput,
  InpCaption,
  topText,
  placeHolder,
  bottomText,
  src,
}: any) => {
  return (
    <>
      <Row>
        <ImgText>
          <Icon>
            <Image src={src} alt="Setting" />
          </Icon>
          <SpanInp>{topText}</SpanInp>
        </ImgText>
      </Row>
      <MultiplierInput type="text" placeholder={placeHolder} />
      <InpCaption>{bottomText}</InpCaption>
    </>
  );
};

export default Multiplier_Formula;
