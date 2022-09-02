import styles from './related-nodes.module.scss';

/* eslint-disable-next-line */
export interface RelatedNodesProps {

}

export function RelatedNodes(props: RelatedNodesProps) {
  return (
    <div className={styles['relatedNode-comp']}>
        <p className={styles['heading-relNodes']}>Related Nodes</p>
        <ul className={styles['relNode-ul']}>
            <li>
                <p className={styles['listDepthIcon']}>
                    <img src='' alt='' />
                    <sup>3</sup>
                </p>
                <p className={styles['relNode-listText']}>
                    <span>
                        Perimeter Monitoring
                        <button className={styles['btnIcon']}>
                            <img src='' alt='' />
                        </button>
                    </span>
                </p>
            </li>

            <li>
                <p className={styles['listDepthIcon']}>
                    <img src='' alt='' />
                    <sup>5</sup>
                </p>
                <p className={styles['relNode-listText']}>
                    <span>
                        Perimeter Monitoring
                        <button className={styles['btnIcon']}>
                            <img src='' alt='' />
                        </button>
                    </span>
                </p>
            </li>

            <li>
                <p className={styles['listDepthIcon configAttIcon']}>
                    <img src='' alt='' />
                </p>
            </li>

        </ul>
    </div>
  );
}

export default RelatedNodes;
