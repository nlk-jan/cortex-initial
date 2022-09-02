import styles from './node-multiplier.module.scss';

import { Grid} from '@mui/material'
import { Box, Container } from '@mui/system'
import Image from 'next/image'

import userIcon from '../../assets/img/person.png'
import settingIcon from '../../assets/img/setting.png'

/* eslint-disable-next-line */
export interface NodeMultiplierProps {
  nodeHeading: string;
}

export function NodeMultiplier(props: NodeMultiplierProps) {
  return (
    <div className={styles['nodeMultiplier-main']}>
        <Container className={styles['main-container']}>
            <Box className={styles['box-main']}>

                <Grid container className={styles['comp-container']} direction="row" item lg={12}>
                    <Grid item lg={12}>
                        <p className={styles['component-heading']}> {props.nodeHeading} </p>
                    </Grid>
                </Grid>

                <Grid container direction="row" item lg={12} alignItems="center">

                    <Grid item lg={12}>
                        <div className={styles['nodeMultiplier-list']}>
                            <ul>
                                <li className={styles['multiplier-List']} > 
                                  <Image
                                    src={userIcon}
                                    alt="user"
                                  />
                                  <span> User Multiplier </span> 
                                </li>
                                <li className={styles['multiplier-List']} > 
                                  <Image
                                    src={settingIcon}
                                    alt="Setting"
                                  />
                                  <span> System Multiplier </span> 
                                </li>
                            </ul>
                        </div>
                    </Grid>

                    <Grid item lg={6}>

                    </Grid>
                    <Grid item lg={6}>
                        <p className={styles['nodeinnerPara']}>
                            15
                        </p>
                    </Grid>


                </Grid>


            </Box>
        </Container>
    </div>
  );
}

export default NodeMultiplier;
