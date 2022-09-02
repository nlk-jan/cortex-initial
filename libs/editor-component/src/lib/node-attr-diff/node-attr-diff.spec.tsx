import { render } from '@testing-library/react';

import NodeAttrDiff from './node-attr-diff';

describe('NodeAttrDiff', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NodeAttrDiff />);
    expect(baseElement).toBeTruthy();
  });
});
