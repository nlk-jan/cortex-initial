import Image from 'next/image';

const CommentSection = ({
  Row,
  ImgText,
  Icon,
  src,
  InputTitle,
  CommentTextArea,
}: any) => {
  return (
    <>
      <Row>
        <ImgText>
          <Icon>
            <Image src={src} alt="Setting" />
          </Icon>
          <InputTitle>Comment</InputTitle>
        </ImgText>
      </Row>
      <CommentTextArea />
    </>
  );
};

export default CommentSection;
