import Image from 'next/image';
import {
  CommentTextArea,
  Icon,
  InputBox,
  InputMessage,
  InputTitle,
} from './styles';

const CommentSection = ({ icon, title, placeHolder, helperText }: any) => {
  return (
    <>
      <InputBox>
        <Icon>
          <Image src={icon} />
        </Icon>
        <InputTitle>{title}</InputTitle>
      </InputBox>
      <CommentTextArea placeholder={placeHolder} />
      <InputMessage>{helperText}</InputMessage>
    </>
  );
};

export default CommentSection;
