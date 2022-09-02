import styles from './filter-btns.module.scss';


import { Button, Stack , Avatar} from '@mui/material'

/* eslint-disable-next-line */
export interface FilterBtnsProps {}

export function FilterBtns(props: FilterBtnsProps) {
  return (
    <div className={styles['relFilterBtn']}>
        <Stack direction="row" spacing={2} sx={{ justifyContent: 'space-between' }}>
            <Button variant="contained" startIcon={<Avatar src='' />} sx={{ p: '0 10px', background: '#133774', width: '110px' }} >
                Filters
            </Button>
            <Button variant="contained" startIcon={<Avatar src='' />} sx={{ p: '0 10px', background: '#133774', width: '110px' }} >
                Sort
            </Button>
            <Button variant="contained" startIcon={<Avatar src='' />} sx={{ p: '0 10px', background: '#133774', width: '110px' }} >
                Reset
            </Button>
        </Stack>
    </div>
  );
}

export default FilterBtns;
