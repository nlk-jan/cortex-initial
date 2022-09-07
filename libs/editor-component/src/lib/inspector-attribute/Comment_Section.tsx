import Image from 'next/image';
import { Icon } from '../atoms/Input';
import { InputTitle } from '../atoms/Input';
import { InputBox } from '../atoms/Input';
import { CommentTextArea } from '../atoms/CommentTextArea';
import { InputMessage } from '../atoms/Input';

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
