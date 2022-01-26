import { AppReducer } from '../types';

const changeOption: AppReducer = (state, action) => {
  const options = state.options.slice();
  options[action.payload.index] = action.payload.option;

  return { ...state, options };
};

export default changeOption;
