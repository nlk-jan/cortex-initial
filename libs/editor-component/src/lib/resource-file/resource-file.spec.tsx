import { render } from '@testing-library/react';

import ResourceFile from './resource-file';

describe('ResourceFile', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ResourceFile />);
    expect(baseElement).toBeTruthy();
  });
});
