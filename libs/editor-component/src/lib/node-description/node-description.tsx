import styles from './node-description.module.scss';

import { Grid} from '@mui/material'
import { Box, Container } from '@mui/system'
/* eslint-disable-next-line */
export interface NodeDescriptionProps {
  nodeHeading: string;
}

export function NodeDescription(props: NodeDescriptionProps) {
  return (
    <div className={styles['nodeBox']}>
        <Container className={styles['main-container']}>
            <Box className={styles['box-main']}>

                <Grid container className={styles['comp-container']} direction="row" item lg={12}>
                    <Grid item lg={12}>
                        <p className={styles['component-heading']}> {props.nodeHeading} </p>
                    </Grid>
                </Grid>



                <Grid container direction="row" item lg={12} alignItems="center">

                    <Grid item lg={12}>
                        <p className={styles['nodeinnerPara']}>
                        The lens of the perimeter cameras need to be able to detec moving objects at the assigned distance and light conditions
                        </p>
                    </Grid>

                </Grid>


            </Box>
        </Container>
    </div>
  );
}

export default NodeDescription;
