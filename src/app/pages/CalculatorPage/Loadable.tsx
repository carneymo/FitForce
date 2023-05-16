/**
 * Asynchronously loads the component for HomePage
 */

import { lazyLoad } from 'utils/loadable';

export const CalculatorPage = lazyLoad(
  () => import('./index'),
  module => module.CalculatorPage,
);
