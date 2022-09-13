import styles from './index.module.scss';
import InspectorAttribute from 'libs/editor-component/src/lib/inspector-attribute/inspector-attribute';
import DescriptionMain from 'libs/editor-component/src/lib/description-main/description-main';
import NodeAttrCommon from '../../../libs/editor-component/src/lib/node-attr-common/node-attr-common';
import MultiplierEditor from 'libs/editor-component/src/lib/multiplier-editor/MultiplierEditor';
import FormulaBar from 'libs/editor-component/src/lib/multiplier-editor/FormulaBar';
import {
  AddFormula,
  CommentBox,
  FilterBtns,
  ItemDescription,
  LogMessage,
  RelationshipsSearch,
} from '@node-editor/editor-component';

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.scss file.
   */
  return (
    <div className={styles.page}>
      <MultiplierEditor />
      {/* <FormulaBar /> */}
    </div>
  );
}

export default Index;
