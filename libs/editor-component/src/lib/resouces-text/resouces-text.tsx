import styles from './resouces-text.module.scss';

import { Grid } from '@mui/material'
import { Box, Container} from '@mui/system'

/* eslint-disable-next-line */
export interface ResoucesTextProps {
  resourceText_userId: string,
  resourceText_date: string,
  resourceText_linkId: string,
  resourceText_userPara: string,
}

export function ResoucesText(props: ResoucesTextProps) {
  return (
    <div className={styles['resourcesText-main']}>
        <Container sx={{ paddingLeft: '0px !important', paddingRight: '0px !important' }} >
            <Box>
                <Grid container className={styles['space-between']} direction="row" item lg={12} sx={{ display: 'flex' }}>
                    <Grid item lg={6}>
                        <p> {props.resourceText_userId} </p>
                    </Grid>
                    <Grid item lg={6}>
                        <p className={styles['text-right']} > {props.resourceText_date} </p>
                    </Grid>
                </Grid>

                <Grid container direction="row" item lg={12} >
                    <Grid item lg={12}>
                        <p className={styles['resourcePara']} >
                            <span className={styles['link-text']}> {props.resourceText_linkId} </span> {props.resourceText_userPara}
                        </p>
                    </Grid>
                </Grid>

            </Box>
        </Container>
    </div>
  );
}

export default ResoucesText;
