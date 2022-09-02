import { render } from '@testing-library/react';

import NodeAttrCommon from './node-attr-common';

describe('NodeAttrCommon', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NodeAttrCommon />);
    expect(baseElement).toBeTruthy();
  });
});
