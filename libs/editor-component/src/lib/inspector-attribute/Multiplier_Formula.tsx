import Image from 'next/image';

const MultiplierFormula = ({
  Row,
  ImgText,
  Icon,
  InputTitle,
  MultiplierInput,
  InputMessage,
  label,
  placeHolder,
  inputCaption,
  src,
}: any) => {
  return (
    <>
      <Row>
        <ImgText>
          <Icon>
            <Image src={src} alt="Setting" />
          </Icon>
          <InputTitle>{label}</InputTitle>
        </ImgText>
      </Row>
      <MultiplierInput type="text" placeholder={placeHolder} />
      <InputMessage>{inputCaption}</InputMessage>
    </>
  );
};

export default MultiplierFormula;
