import styles from './node-name.module.scss';

import { Grid, Button, Tooltip } from '@mui/material';
import { Box, Container } from '@mui/system';

export interface NodeNameProps {
  nodeHeading: string;
}

export function NodeName(props: NodeNameProps) {
  return (
    <div className={styles['nodeBox']}>
      <Container className={styles['main-container']}>
        <Box className={styles['box-main']}>
          <Grid
            container
            className={styles['comp-container']}
            direction="row"
            item
            lg={12}
          >
            <Grid item lg={12}>
              <p className={styles['component-heading']}>
                {' '}
                {props.nodeHeading}{' '}
              </p>
            </Grid>
          </Grid>

          <Grid container direction="row" item lg={12} alignItems="center">
            <Grid item lg={12}>
              <p className={styles['nodeinnerPara']}>Perimeter Camera Lens</p>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}

export default NodeName;
