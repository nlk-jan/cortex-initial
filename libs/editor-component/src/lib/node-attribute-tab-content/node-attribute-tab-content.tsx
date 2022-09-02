import styles from './node-attribute-tab-content.module.scss';

import {
  NodeDetail,
  NodeName,
  NodeDescription,
  NodeMultiplier,
  NodeAttrDiff,
} from '@node-editor/editor-component';

/* eslint-disable-next-line */
export interface NodeAttributeTabContentProps {}

export function NodeAttributeTabContent(props: NodeAttributeTabContentProps) {
  return (
    <div className={styles['nodeAttributeTab-main']}>
      <p>Node Properties</p>
      <NodeDetail
        NodeType="Object"
        nodeId="98ED0F"
        nodeVersion="1001"
        nodeOption="X"
        nodeGroupId="FF"
      />
      <NodeName nodeHeading="Node Name" />
      <NodeDescription nodeHeading="Node Description" />
      <NodeMultiplier nodeHeading="Node Multiplier" />
      <NodeAttrDiff nodeHeading="Node Attributes" NodeAttributes_type="Diff" />
    </div>
  );
}

export default NodeAttributeTabContent;
