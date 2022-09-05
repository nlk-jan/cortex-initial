import styles from './node-attr-common.module.scss';

import { Grid } from '@mui/material';
import { Box, Container } from '@mui/system';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faPlus } from '@fortawesome/free-solid-svg-Icons'

/* eslint-disable-next-line */
export interface NodeAttrCommonProps {
  nodeHeading: string;
  NodeAttributes_type: string;
}

export function NodeAttrCommon(props: NodeAttrCommonProps) {
  return (
    <div className={styles['nodeAttributes-main nodeBox']}>
      <Container className={styles['bgcolor color-text-blue main-container']}>
        <Box className={styles['box-main']}>
          <Grid
            container
            className={styles['comp-container']}
            direction="row"
            item
            lg={12}
          >
            <Grid item lg={12}>
              <p className={styles['nodeAttribute-heading']}>
                {' '}
                {props.nodeHeading}{' '}
                <span> ( {props.NodeAttributes_type} ) </span>{' '}
              </p>
            </Grid>
          </Grid>

          <Grid container direction="row" item lg={12} alignItems="center">
            <Grid item lg={12}>
              <div className={styles['nodeAttr-list']}>
                <ul>
                  <li>
                    {/* <img src={settingIcon} alt="" />   */}
                    <span> Sensor Size </span>{' '}
                  </li>
                  <li>
                    {/* <img src={w_settingIcon} alt="" />   */}
                    <span> 1/3 inch </span>{' '}
                  </li>
                  <li>
                    {/* <img src={settingIcon} alt="" />   */}
                    <span> Object Distance </span>{' '}
                  </li>
                  <li>
                    {/* <img src={w_settingIcon} alt="" />   */}
                    <span> 28 meters </span>{' '}
                  </li>
                  <li>
                    {/* <img src={settingIcon} alt="" />   */}
                    <span> Object Size </span>{' '}
                  </li>
                  <li>
                    {/* <img src={w_settingIcon} alt="" />   */}
                    <span> 6 meters </span>{' '}
                  </li>
                  <li>
                    {/* <img src={settingIcon} alt="" />   */}
                    <span> Object Speed </span>{' '}
                  </li>
                  <li>
                    {/* <img src={w_settingIcon} alt="" />   */}
                    <span> 0-12 mps </span>{' '}
                  </li>
                  <li>
                    {/* <img src={settingIcon} alt="" />   */}
                    <span> Mechanical </span>{' '}
                  </li>
                  <li>
                    {/* <img src={w_settingIcon} alt="" />   */}
                    <span> Fixed </span>{' '}
                  </li>
                  <li>
                    {/* <img src={settingIcon} alt="" />   */}
                    <span> formula name </span>{' '}
                  </li>
                  <li>
                    {/* <img src={w_settingIcon} alt="" />   */}
                    <span> xxxx yy </span>{' '}
                  </li>
                </ul>
              </div>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}

export default NodeAttrCommon;
