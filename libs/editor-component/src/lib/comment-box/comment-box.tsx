import styles from './comment-box.module.scss';

/* eslint-disable-next-line */
export interface CommentBoxProps {}

export function CommentBox(props: CommentBoxProps) {
  return (
    <div className={styles['commentbox-main']}>
      <textarea name="" id="" placeholder="Type a new message"></textarea>
      <div className={styles['commennt-actions d-flex']}>
        <div>
          <button className={styles['btnImg']}>
            <img src="" alt="" />
          </button>
          <button className={styles['btnImg']}>
            <img src="" alt="" />
          </button>
          <button className={styles['btnImg']}>
            <img src="" alt="" />
          </button>
        </div>
        <div>
          <button className={styles['btnImg']}>
            <img src="" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CommentBox;
