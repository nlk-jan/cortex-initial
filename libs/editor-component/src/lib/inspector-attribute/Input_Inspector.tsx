import Image from 'next/image';

const InputInspector = ({
  Col_6,
  InputBox,
  Icon,
  settingIcon,
  InputTitle,
  Input,
  InputMessage,
  InputText,
  placeHolder,
  inputCaption,
}: any) => {
  return (
    <>
      <Col_6>
        <InputBox>
          <Icon>
            <Image src={settingIcon} alt="Setting" />
          </Icon>
          <InputTitle>{InputText}</InputTitle>
        </InputBox>
        <Input type="text" placeholder={placeHolder} />
        <InputMessage>{inputCaption} </InputMessage>
      </Col_6>
    </>
  );
};

export default InputInspector;
