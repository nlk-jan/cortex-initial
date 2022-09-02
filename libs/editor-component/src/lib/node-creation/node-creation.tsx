import styles from './node-creation.module.scss';

import { Grid, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material'
import { Box, Container } from '@mui/system'

/* eslint-disable-next-line */
export interface NodeCreationProps {
  nodeHeading: string,
  NodeType: string,
  nodeId: string,
  nodeVersion: string,
  nodeCreatedBy: string,
  nodeCreatedAt: string,
}

export function NodeCreation(props: NodeCreationProps) {
  return (
    <div className={styles['nodeDetails-main nodeBox']}>
      <Container className={styles['bgcolor color-text-blue main-container']}>
          <Box className={styles['box-main']}>

              <Grid container className={styles['comp-container']} direction="row" item lg={12}>
                  <Grid item lg={12}>
                      <p className={styles['component-heading']}>{props.nodeHeading}</p>
                  </Grid>
              </Grid>

              <Grid container direction="row" item lg={12}>

                  <Grid item lg={10}>
                      <TableContainer>
                          <Table style={{ borderBottom: "none" }}>
                              <TableBody>
                                  <TableRow>
                                      <TableCell className={styles['table-cell']}>
                                          Node Type
                                      </TableCell>
                                      <TableCell className={styles['table-cell']}>
                                          {props.NodeType}
                                      </TableCell>
                                  </TableRow>
                                  <TableRow>
                                      <TableCell className={styles['table-cell']}>
                                          Node ID
                                      </TableCell>
                                      <TableCell className={styles['table-cell']}>
                                          {props.nodeId}
                                      </TableCell>
                                  </TableRow>
                                  <TableRow>
                                      <TableCell className={styles['table-cell']}>
                                          Version
                                      </TableCell>
                                      <TableCell className={styles['table-cell']}>
                                          {props.nodeVersion}
                                      </TableCell>
                                  </TableRow>
                                  <TableRow>
                                      <TableCell className={styles['table-cell']}>
                                          Created by
                                      </TableCell>
                                      <TableCell className={styles['table-cell']}>
                                          {props.nodeCreatedBy}
                                      </TableCell>
                                  </TableRow>
                                  <TableRow>
                                      <TableCell className={styles['table-cell']}>
                                          Created at
                                      </TableCell>
                                      <TableCell className={styles['table-cell']}>
                                          {props.nodeCreatedAt}
                                      </TableCell>
                                  </TableRow>
                              </TableBody>
                          </Table>
                      </TableContainer>
                  </Grid>

              </Grid>

          </Box>
      </Container>
    </div>
  );
}

export default NodeCreation;
