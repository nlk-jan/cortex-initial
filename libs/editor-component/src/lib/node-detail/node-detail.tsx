import styles from './node-detail.module.scss';

import {
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from '@mui/material';
import { Box, Container } from '@mui/system';
import Image from 'next/image';
import leafTrue from '../../assets/img/Leaf_true.png';
import OrphanedImg from '../../assets/img/Orphaned.png';
import UnionImg from '../../assets/img/Union.png';
import nodeLocationImg from '../../assets/img/nodeLocation.png';
import HiddenImg from '../../assets/img/Hidden.png';
import trashImg from '../../assets/img/trash.png';
import PercentageDialImg from '../../assets/img/PercentageDial.png';
import NodeHealthImg from '../../assets/img/NodeHealth.png';
import CommitImg from '../../assets/img/Commit.png';
import LockImg from '../../assets/img/Lock.png';

/* eslint-disable-next-line */
export interface NodeDetailProps {
  NodeType: string;
  nodeId: string;
  nodeVersion: string;
  nodeOption: string;
  nodeGroupId: string;
}

export function NodeDetail(props: NodeDetailProps) {
  return (
    <div className={styles['nodeDetails-main nodeBox']}>
      <Container
        className={styles['bgcolor color-text-blue plr-0']}
        sx={{ paddingLeft: '0px !important', paddingRight: '0px !important' }}
      >
        <Box className={styles['box-main']}>
          <Grid
            container
            className={styles['comp-container']}
            direction="row"
            item
            lg={12}
          >
            <Grid item lg={12}>
              <p className={styles['component-heading']}>Node Details</p>
            </Grid>
          </Grid>

          <Grid container direction="row" item lg={12}>
            <Grid item lg={6}>
              <TableContainer>
                <Table style={{ borderBottom: 'none' }}>
                  <TableBody>
                    <TableRow>
                      <TableCell className={styles['table-cell']}>
                        Node Type
                      </TableCell>
                      <TableCell className={styles['table-cell']}>
                        {/* Object */}
                        {props.NodeType}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className={styles['table-cell']}>
                        Node ID
                      </TableCell>
                      <TableCell className={styles['table-cell']}>
                        {/* 98ED0F */}
                        {props.nodeId}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className={styles['table-cell']}>
                        Version
                      </TableCell>
                      <TableCell className={styles['table-cell']}>
                        {/* 1001 */}
                        {props.nodeVersion}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className={styles['table-cell']}>
                        Option
                      </TableCell>
                      <TableCell className={styles['table-cell']}>
                        {/* X */}
                        {props.nodeOption}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className={styles['table-cell']}>
                        GroupID
                      </TableCell>
                      <TableCell className={styles['table-cell']}>
                        {/* FF */}
                        {props.nodeGroupId}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
            <Grid item lg={6}>
              <div className={styles['nodeDeatils-lg-btn']}>
                <button className={styles['mb-10']}>
                  <Image src={CommitImg} alt="Commit" />
                </button>
                <button>
                  <Image src={LockImg} alt="Lock" />
                </button>
              </div>
            </Grid>
          </Grid>

          <Grid
            container
            direction="row"
            item
            lg={12}
            className={styles['nodeDetails-bt-btns']}
          >
            <Grid item lg={6}>
              <div className={styles['bt-left-btns']}>
                <button className={styles['btnImg']}>
                  <Image src={leafTrue} alt="Leaf" />
                </button>
                <button className={styles['btnImg']}>
                  <Image src={OrphanedImg} alt="Commit" />
                </button>
                <button className={styles['btnImg']}>
                  <Image src={UnionImg} alt="Location" />
                  <span>15</span>
                </button>
                <button className={styles['btnImg']}>
                  <Image src={nodeLocationImg} alt="Location" />
                  <span>7</span>
                </button>
              </div>
            </Grid>
            <Grid item lg={6}>
              <div className={styles['text-right']}>
                <button className={styles['btnImg']}>
                  <Image src={HiddenImg} alt="View" />
                </button>
                <button className={styles['btnImg']}>
                  <Image src={trashImg} alt="Trash" />
                </button>
                <button className={styles['btnImg']}>
                  <Image src={PercentageDialImg} alt="Percentage" />
                </button>
                <button className={styles['btnImg']}>
                  <Image src={NodeHealthImg} alt="Danger" />
                </button>
              </div>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}

export default NodeDetail;
