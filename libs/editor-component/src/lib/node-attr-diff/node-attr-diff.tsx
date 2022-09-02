import styles from './node-attr-diff.module.scss';

import { Grid } from '@mui/material';
import { Box, Container } from '@mui/system';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import Image from 'next/image';

import userIcon from '../../assets/img/person.png';
import w_userIcon from '../../assets/img/w_user.png';
import settingIcon from '../../assets/img/setting.png';
import w_settingIcon from '../../assets/img/w_setting.png';

/* eslint-disable-next-line */
export interface NodeAttrDiffProps {
  nodeHeading: string;
  NodeAttributes_type: string;
}

export function NodeAttrDiff(props: NodeAttrDiffProps) {
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
                    <Image src={settingIcon} alt="Setting" />
                    <span> Optimal Focal Length </span>
                  </li>
                  <li>
                    {/* <img src={w_settingIcon} alt="" /> */}
                    <Image src={w_settingIcon} alt="Setting" />
                    <span> 22 mm </span>
                  </li>
                  {/* <li>
                    <img src={userIcon} alt="" />
                    <p>
                                            <span> Polarized </span>
                                            <span>
                                                <div className='nodeDetails-rightBtns nodeAttTooltip-btn'>
                                                    <Tooltip title={<NodeAttrTooltip machineTransFrom='Čeština' originalText='Polarizované' />} placement="bottom"

                                                        componentsProps={{
                                                            tooltip: {
                                                                sx: {
                                                                    color: "#fff",
                                                                    backgroundColor: "#0C2146",
                                                                    padding: '10px',
                                                                    border: '4px solid #2979FF',
                                                                    marginTop: '0 !important',
                                                                }
                                                            }
                                                        }}

                                                    >
                                                        <Button> <img className='yellowWorldImg' src={world_2_light_Img} ></img> </Button>
                                                    </Tooltip>
                                                </div>
                                            </span>
                                        </p>
                  </li> */}
                  <li>
                    {/* <img src={w_userIcon} alt="" /> */}
                    <Image src={w_userIcon} alt="Setting" />
                    <span> True </span>
                  </li>
                  <li>
                    {/* <img src={settingIcon} alt="" /> */}
                    <Image src={settingIcon} alt="Setting" />
                    <span> Max Operating Temperature </span>
                  </li>
                  <li>
                    {/* <img src={w_userIcon} alt="" /> */}
                    <Image src={w_userIcon} alt="Setting" />
                    <span> 50 Celcius </span>
                  </li>

                  <li>
                    {/* <img src={settingIcon} alt="" /> */}
                    <Image src={settingIcon} alt="Setting" />
                    <span> Vertical Filed of View </span>
                  </li>
                  <li>
                    {/* <img src={w_settingIcon} alt="" /> */}
                    <Image src={w_settingIcon} alt="Setting" />
                    <span> -15 degrees </span>
                  </li>
                  <li>
                    {/* <img src={settingIcon} alt="" /> */}
                    <Image src={settingIcon} alt="Setting" />
                    <span> Horizontal Field of View </span>
                  </li>
                  <li>
                    {/* <img src={w_settingIcon} alt="" /> */}
                    <Image src={w_settingIcon} alt="Setting" />
                    <span> 12.5 degrees </span>
                  </li>

                  <li className={styles['addNewAttr']}>
                    <span>
                      {' '}
                      <FontAwesomeIcon icon={faPlus} />{' '}
                    </span>
                    <span>Add A New Attribute or Formula to GraphNode</span>
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

export default NodeAttrDiff;
