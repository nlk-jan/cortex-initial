import { render } from '@testing-library/react';

import NodeCreation from './node-creation';

describe('NodeCreation', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NodeCreation />);
    expect(baseElement).toBeTruthy();
  });
});
