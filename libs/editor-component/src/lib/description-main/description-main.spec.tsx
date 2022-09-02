import { render } from '@testing-library/react';

import DescriptionMain from './description-main';

describe('DescriptionMain', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DescriptionMain />);
    expect(baseElement).toBeTruthy();
  });
});
