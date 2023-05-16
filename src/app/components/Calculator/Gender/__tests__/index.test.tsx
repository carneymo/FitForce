import * as React from 'react';
import { render } from '@testing-library/react';

import { Gender } from '..';

describe('<Gender  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(
      <Gender
        updateGender={function (gender: string): void {
          throw new Error('Function not implemented.');
        }}
      />,
    );
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
