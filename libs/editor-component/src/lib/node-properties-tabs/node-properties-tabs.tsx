import styles from './node-properties-tabs.module.scss';

import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import { NodeAttributeTabContent } from "@node-editor/editor-component";



/* eslint-disable-next-line */
export interface NodePropertiesTabsProps {}



export function NodePropertiesTabs(props: NodePropertiesTabsProps) {
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: '100%', typography: 'body1' }} className={styles['tabBoxMain']} >
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <div className={styles['nodePropTabs-btns']} >
            <TabList className={styles['tablistMain']} onChange={handleChange} aria-label="lab API tabs example" >
              <Tab label="Attributes" value="1" className={styles['tabQa']} />
              <Tab label="Relationships" value="2" className={styles['tabQa']} />
              <Tab label="Logs" value="3" className={styles['tabQa']} />
              <Tab label="Resources" value="4" className={styles['tabQa']} />
              <Tab label="Description" value="5" className={styles['tabQa']} />
            </TabList>
          </div>
        </Box>
        <TabPanel value="1" sx={{padding:'10px'}}>
          <NodeAttributeTabContent />
        </TabPanel>
        <TabPanel value="2" sx={{padding:'10px'}}>
          Relationships
        </TabPanel>
        <TabPanel value="3" sx={{padding:'10px'}}>
          Logs
        </TabPanel>
        <TabPanel value="4" sx={{padding:'10px'}}>
          Resources
        </TabPanel>
        <TabPanel value="5" sx={{padding:'10px'}}>
          Description
        </TabPanel>

      </TabContext>
    </Box>
  );


}

export default NodePropertiesTabs;
