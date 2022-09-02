import { render } from '@testing-library/react';

import LogMessage from './log-message';

describe('LogMessage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LogMessage />);
    expect(baseElement).toBeTruthy();
  });
});
