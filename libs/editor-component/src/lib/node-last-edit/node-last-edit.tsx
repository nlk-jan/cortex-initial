import styles from './node-last-edit.module.scss';
import { Grid, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material'
import { Box, Container } from '@mui/system'


/* eslint-disable-next-line */
export interface NodeLastEditProps {
  nodeHeading: string,
  nodeVersion: string,
  nodeEditedBy: string,
  nodeEditedAt: string,

}

export function NodeLastEdit(props: NodeLastEditProps) {
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
                            <Table style={{ borderBottom: "none" }} className={styles['table-qa']}>
                                <TableBody className={styles['tbody-qa']}>
                                    
                                    <TableRow className={styles['tr-qa']}>
                                        <TableCell className={styles['table-cell']}>
                                            Version
                                        </TableCell>
                                        <TableCell className={styles['table-cell']}>
                                            {props.nodeVersion}
                                        </TableCell>
                                    </TableRow>
                                    <TableRow className={styles['tr-qa']}>
                                        <TableCell className={styles['table-cell']}>
                                            Edited by
                                        </TableCell>
                                        <TableCell className={styles['table-cell']}>
                                            {props.nodeEditedBy}
                                        </TableCell>
                                    </TableRow>
                                    <TableRow className={styles['tr-qa']}>
                                        <TableCell className={styles['table-cell']}>
                                            Edited at
                                        </TableCell>
                                        <TableCell className={styles['table-cell']}>
                                            {props.nodeEditedAt}
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

export default NodeLastEdit;
