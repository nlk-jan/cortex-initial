import styles from './add-formula.module.scss';

/* eslint-disable-next-line */
export interface AddFormulaProps {}

export function AddFormula(props: AddFormulaProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to AddFormula!</h1>
    </div>
  );
}

export default AddFormula;
