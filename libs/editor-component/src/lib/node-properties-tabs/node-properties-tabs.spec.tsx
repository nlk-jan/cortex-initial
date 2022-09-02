import { render } from '@testing-library/react';

import NodePropertiesTabs from './node-properties-tabs';

describe('NodePropertiesTabs', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NodePropertiesTabs />);
    expect(baseElement).toBeTruthy();
  });
});
