import styles from './input-text.module.scss';

/* eslint-disable-next-line */
export interface InputTextProps {}

export function InputText(props: InputTextProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to InputText!</h1>
    </div>
  );
}

export default InputText;
