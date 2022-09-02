import { render } from '@testing-library/react';

import ResourceLink from './resource-link';

describe('ResourceLink', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ResourceLink />);
    expect(baseElement).toBeTruthy();
  });
});
