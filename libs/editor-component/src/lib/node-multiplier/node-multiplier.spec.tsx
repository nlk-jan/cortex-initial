import { render } from '@testing-library/react';

import NodeMultiplier from './node-multiplier';

describe('NodeMultiplier', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NodeMultiplier />);
    expect(baseElement).toBeTruthy();
  });
});
