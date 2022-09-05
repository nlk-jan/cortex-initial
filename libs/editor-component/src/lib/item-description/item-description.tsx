import styles from './item-description.module.scss';

/* eslint-disable-next-line */
export interface ItemDescriptionProps {
  itemName: string;
  itemDescp: string;
  itemImg: string;
  imgCaption: string;
}

export function ItemDescription(props: ItemDescriptionProps) {
  return (
    <div className={styles['itemDescroption-main']}>
      <p className={styles['itemHeading']}> {props.itemName} </p>
      <p>{props.itemDescp}</p>
      <div className={styles['itemImg']}>
        <img src={props.itemImg} alt="" />
      </div>
      <p className={styles['img-caption']}>{props.imgCaption}</p>
    </div>
  );
}

export default ItemDescription;
