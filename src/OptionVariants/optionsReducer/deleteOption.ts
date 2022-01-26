import { AppReducer } from '../types';
import getStateAfterDeleting from './getStateAfterDeleting';
import getVariants from './getVariants';
import syncVariants from './syncVariants';

const deleteOption: AppReducer = (state, action) => {
  const options = state.options.filter((_, i) => i !== action.payload.index);
  const variants = getVariants(options);
  syncVariants(state.variants, variants);

  return getStateAfterDeleting({ options, variants });
};

export default deleteOption;
