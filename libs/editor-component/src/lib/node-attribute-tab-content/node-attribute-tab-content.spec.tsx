import { render } from '@testing-library/react';

import NodeAttributeTabContent from './node-attribute-tab-content';

describe('NodeAttributeTabContent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NodeAttributeTabContent />);
    expect(baseElement).toBeTruthy();
  });
});
