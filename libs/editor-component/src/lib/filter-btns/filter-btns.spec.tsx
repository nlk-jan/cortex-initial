import { render } from '@testing-library/react';

import FilterBtns from './filter-btns';

describe('FilterBtns', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FilterBtns />);
    expect(baseElement).toBeTruthy();
  });
});
