import { render } from '@testing-library/react';

import NodeDetail from './node-detail';

describe('NodeDetail', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NodeDetail />);
    expect(baseElement).toBeTruthy();
  });
});
