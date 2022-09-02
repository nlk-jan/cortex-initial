import { render } from '@testing-library/react';

import ResoucesText from './resouces-text';

describe('ResoucesText', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ResoucesText />);
    expect(baseElement).toBeTruthy();
  });
});
