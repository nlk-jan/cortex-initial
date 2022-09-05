import Image from 'next/image';

const Comment_Section = ({
  Row,
  ImgText,
  Icon,
  src,
  SpanInp,
  CommentTextArea,
}: any) => {
  return (
    <>
      <Row>
        <ImgText>
          <Icon>
            <Image src={src} alt="Setting" />
          </Icon>
          <SpanInp>Comment</SpanInp>
        </ImgText>
      </Row>
      <CommentTextArea />
    </>
  );
};

export default Comment_Section;
