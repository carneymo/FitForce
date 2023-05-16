/**
 *
 * Asynchronously loads the component for Cardio
 *
 */

import { lazyLoad } from 'utils/loadable';

export const Cardio = lazyLoad(
  () => import('./index'),
  module => module.Cardio,
);
