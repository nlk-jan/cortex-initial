import { render } from '@testing-library/react';

import RelatedNodes from './related-nodes';

describe('RelatedNodes', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RelatedNodes />);
    expect(baseElement).toBeTruthy();
  });
});
