import styles from './input-select.module.scss';

/* eslint-disable-next-line */
export interface InputSelectProps {}

export function InputSelect(props: InputSelectProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to InputSelect!</h1>
    </div>
  );
}

export default InputSelect;
