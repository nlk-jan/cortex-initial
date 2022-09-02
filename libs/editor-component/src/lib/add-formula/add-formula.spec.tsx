import { render } from '@testing-library/react';

import AddFormula from './add-formula';

describe('AddFormula', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AddFormula />);
    expect(baseElement).toBeTruthy();
  });
});
