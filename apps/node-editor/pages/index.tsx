import styles from './index.module.scss';
import { InputSelect, InputText } from '@node-editor/form';
import {
  NodeAttrCommon,
  NodeAttrDiff,
  NodeAttributeTabContent,
  NodeDetail,
  NodeName,
  NodePropertiesTabs,
  RelationshipsSearch,
} from '@node-editor/editor-component';
import InspectorAttribute from 'libs/editor-component/src/lib/inspector-attribute/inspector-attribute';

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.scss file.
   */
  return (
    <div className={styles.page}>
      {/* <ItemDescription itemDescp='Hello World!' itemImg='hsv' itemName='itemName' imgCaption='imgCaption'/>
      <RelationshipsSearch searchPlaceholder='Search...' /> */}

      {/* <div className={styles['main-wrapper-qa']}>
        <InspectorAttribute />
      </div> */}
      <div>
        <InspectorAttribute />
      </div>
    </div>
  );
}

export default Index;
