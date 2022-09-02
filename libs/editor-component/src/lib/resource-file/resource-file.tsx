import styles from './resource-file.module.scss';

import { Grid } from '@mui/material'
import { Box, Container } from '@mui/system'

import { useState } from 'react';

/* eslint-disable-next-line */
export interface ResourceFileProps {
  resourceText_userId: string,
  resourceText_date: string,

}

export function ResourceFile(props: ResourceFileProps) {
  
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
                            <p className= {styles['resourceFile']} >
                                <label htmlFor="resourcefile_inp1">
                                    {/* <img src={require('../../assets/img/fileIcon.png')} className='resource-icon' /> */}
                                </label>
                                <input type="file" name="" id="resourcefile_inp1" onChange={handleChange} />
                                <span> {filename} </span>
                            </p>
                        </Grid>
                    </Grid>

                </Box>
            </Container>
        </div>
  );
}

export default ResourceFile;
