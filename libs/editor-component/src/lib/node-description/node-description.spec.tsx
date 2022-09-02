import { render } from '@testing-library/react';

import NodeDescription from './node-description';

describe('NodeDescription', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NodeDescription />);
    expect(baseElement).toBeTruthy();
  });
});
