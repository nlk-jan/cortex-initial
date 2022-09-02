import { render } from '@testing-library/react';

import NodeLastEdit from './node-last-edit';

describe('NodeLastEdit', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NodeLastEdit />);
    expect(baseElement).toBeTruthy();
  });
});
