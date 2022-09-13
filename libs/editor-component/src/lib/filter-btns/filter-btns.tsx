import styles from './filter-btns.module.scss';

import { Button, Stack, Avatar } from '@mui/material';
import { RealFilterButtons } from './style';

/* eslint-disable-next-line */
export interface FilterBtnsProps {}

export function FilterBtns(props: FilterBtnsProps) {
  return (
    <RealFilterButtons>
      <Stack
        direction="row"
        spacing={2}
        sx={{ justifyContent: 'space-between' }}
      >
        <Button
          variant="contained"
          startIcon={<Avatar src="" />}
          sx={{ p: '0 10px', background: '#133774', width: '110px' }}
        >
          Filters
        </Button>
        <Button
          variant="contained"
          startIcon={<Avatar src="" />}
          sx={{ p: '0 10px', background: '#133774', width: '110px' }}
        >
          Sort
        </Button>
        <Button
          variant="contained"
          startIcon={<Avatar src="" />}
          sx={{ p: '0 10px', background: '#133774', width: '110px' }}
        >
          Reset
        </Button>
      </Stack>
    </RealFilterButtons>
  );
}

export default FilterBtns;
