import { render } from '@testing-library/react';

import CommentBox from './comment-box';

describe('CommentBox', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CommentBox />);
    expect(baseElement).toBeTruthy();
  });
});
