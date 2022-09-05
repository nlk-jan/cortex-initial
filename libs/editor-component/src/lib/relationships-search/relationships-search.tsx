import styles from './relationships-search.module.scss';

import SearchIcon from '@mui/Icons-material/Search';
import { IconButton, InputBase, Paper } from '@mui/material';

/* eslint-disable-next-line */
export interface RelationshipsSearchProps {
  searchPlaceholder: string;
}

export function RelationshipsSearch(props: RelationshipsSearchProps) {
  return (
    <div className={styles['relationShip-searchComp']}>
      <div className={styles['relationShip-topNav']}>
        <Paper
          component="form"
          sx={{
            p: '2px 4px',
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            background: 'none',
            color: '#ffff',
          }}
        >
          <InputBase
            className={styles['searchFIled']}
            sx={{
              ml: 0,
              flex: 1,
              color: '#fff',
              '&::placeholder': {
                color: 'gray',
              },
            }}
            // Search...
            placeholder={props.searchPlaceholder}
          />
          <IconButton
            type="submit"
            sx={{ p: '0', color: '#fff', borderColor: '#fff' }}
            aria-label="search"
          >
            <SearchIcon />
          </IconButton>
        </Paper>
      </div>
    </div>
  );
}

export default RelationshipsSearch;
