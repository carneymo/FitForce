import * as React from 'react';
import { render } from '@testing-library/react';

import { AgeGroup } from '..';

describe('<AgeGroup  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<AgeGroup age={''} gender={''} />);
  });
});
