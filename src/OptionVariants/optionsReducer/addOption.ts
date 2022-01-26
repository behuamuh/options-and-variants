import { AppReducer } from '../types';

const emptyOption = {
  name: '',
  variants: [],
};

const addOption: AppReducer = (state) => {
  const options = state.options.concat(emptyOption);

  return { ...state, options };
}

export default addOption;
