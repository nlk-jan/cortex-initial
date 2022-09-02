import { render } from '@testing-library/react';

import ResourceImage from './resource-image';

describe('ResourceImage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ResourceImage />);
    expect(baseElement).toBeTruthy();
  });
});
