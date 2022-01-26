import { AppReducer } from '../types';
import getStateAfterDeleting from './getStateAfterDeleting';

const deleteVariant: AppReducer = (state, action) => {
  state.variants[action.payload.index].deleted = true;

  return getStateAfterDeleting({ ...state });
};

export default deleteVariant;
