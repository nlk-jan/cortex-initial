import { render } from '@testing-library/react';

import RelationshipsSearch from './relationships-search';

describe('RelationshipsSearch', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RelationshipsSearch />);
    expect(baseElement).toBeTruthy();
  });
});
