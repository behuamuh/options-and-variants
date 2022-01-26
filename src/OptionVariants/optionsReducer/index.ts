import { Action, AppReducer, AppState } from '../types';
import addOption from './addOption';
import changeOption from './changeOption';
import changeOptionVariants from './changeOptionVariants';
import deleteOption from './deleteOption';
import deleteVariant from './deleteVariant';

const reducersMap: Record<string, AppReducer> = {
  addOption,
  changeOption,
  changeOptionVariants,
  deleteOption,
  deleteVariant,
}

const optionsReducer:AppReducer = (state: AppState, action: Action) => {
  const reducer = reducersMap[action.type];

  return reducer ? reducer(state, action) : state;
};

export default optionsReducer;
