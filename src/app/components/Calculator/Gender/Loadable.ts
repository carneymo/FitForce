/**
 *
 * Asynchronously loads the component for Gender
 *
 */

import { lazyLoad } from 'utils/loadable';

export const Gender = lazyLoad(
  () => import('./index'),
  module => module.Gender,
);
