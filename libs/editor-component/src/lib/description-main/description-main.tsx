import styles from './description-main.module.scss';
import { ItemDescription, RelationshipsSearch } from "@node-editor/editor-component";

/* eslint-disable-next-line */
export interface DescriptionMainProps { }

export function DescriptionMain(props: DescriptionMainProps) {
  return (
    <div className={styles['descriptionComp-main']}>
      <RelationshipsSearch searchPlaceholder='wiki.neurologik.io\cctv_lenses.html' />
      <ItemDescription
        itemName='CCTV Camera Lens'
        itemDescp='A CCTV Camera Lens is an optical lens or assembly of lenses used in conjunction with a camera body and mechanism to make images of objects on sensors capable of producing image streams electronically.'
        itemImg=''
        imgCaption='Different kinds of camera lenses, including wide angle, telephoto and speciality'
      />
    </div>
  );
}

export default DescriptionMain;
