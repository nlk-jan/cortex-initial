import styles from './resource-image.module.scss';

import { Grid } from '@mui/material'
import { Box, Container } from '@mui/system'
import { useState } from 'react';

/* eslint-disable-next-line */
export interface ResourceImageProps {
  resourceText_userId: string,
  resourceText_date: string,
  resourceText_filename: string,
}

export function ResourceImage(props: ResourceImageProps) {

  const [filename , setFilename] = useState('Choose File')
  function handleChange(event: any) {
      setFilename(`${event.target.files[0].name}`)
  }

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
                            <p className={styles['resourceImage d-flex align-center']} >
                                    {/* <img src={require('../../assets/img/ImageIcon.png')} className='resource-icon' /> */}
                                {/* <label htmlFor="resourcefile_inp1">
                                </label> */}
                                {/* <input type="file" name="" id="resourcefile_inp1" onChange={handleChange} /> */}
                                <span> {props.resourceText_filename} </span>
                            </p>
                            <div className={styles['resource-product-img']}>
                                {/* <img src={require('../../assets/img/lensImg.png')} alt="" /> */}
                            </div>
                        </Grid>
                    </Grid>

                </Box>
            </Container>
        </div>
  );
}

export default ResourceImage;
