import * as React from 'react';
import { render } from '@testing-library/react';

import { HamrInput } from '..';

describe('<HamrInput  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<HamrInput age={''} gender={''} />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
