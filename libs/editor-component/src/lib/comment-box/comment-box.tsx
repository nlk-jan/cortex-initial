import { CommentTextArea } from '../atoms/CommentTextArea';
import styles from './comment-box.module.scss';
import { ButtonImage, CommentActions, CommentBoxMain } from './styles';
import Image from 'next/image';

/* eslint-disable-next-line */
export interface CommentBoxProps {}

export function CommentBox(props: CommentBoxProps) {
  return (
    <CommentBoxMain>
      <CommentTextArea placeholder="Type a new message" />
      <CommentActions>
        <div>
          {/* <ButtonImage> */}
          <button className={styles['btnImg']}>
            <img src="" alt="" />
          </button>
          {/* </ButtonImage> */}
          <button className={styles['btnImg']}>
            <Image src="" alt="" />
          </button>
          <button className={styles['btnImg']}>
            <img src="" alt="" />
          </button>
        </div>
        <div>
          <button className={styles['btnImg']}>
            <Image src="" alt="" />
          </button>
        </div>
      </CommentActions>
    </CommentBoxMain>
  );
}

export default CommentBox;
