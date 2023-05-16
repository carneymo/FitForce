import * as React from 'react';
import { render } from '@testing-library/react';

import { Cardio } from '..';

describe('<Cardio  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<Cardio age={''} gender={''} />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
