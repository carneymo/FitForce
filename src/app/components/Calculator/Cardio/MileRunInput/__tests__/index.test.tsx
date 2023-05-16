import * as React from 'react';
import { render } from '@testing-library/react';

import { MileRunInput } from '..';

describe('<MileRunInput  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<MileRunInput age={''} gender={''} />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
