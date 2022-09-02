import { render } from '@testing-library/react';

import NodeName from './node-name';

describe('NodeName', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NodeName />);
    expect(baseElement).toBeTruthy();
  });
});
