import { AppReducer } from '../types';
import getVariants from './getVariants';
import syncVariants from './syncVariants';

const changeOptionVariants: AppReducer = (state, action) => {
  const options = state.options.slice();
  options[action.payload.index] = action.payload.option;
  const variants = getVariants(options);
  syncVariants(state.variants, variants);

  return { options, variants };
};

export default changeOptionVariants;
