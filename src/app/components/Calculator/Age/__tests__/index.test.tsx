import * as React from 'react';
import { render } from '@testing-library/react';

import { Age } from '..';

describe('<Age  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(
      <Age
        updateAge={function (age: string | number): void {
          throw new Error('Function not implemented.');
        }}
      />,
    );
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
