import { Dispatch, useMemo } from 'react';

import { optionsActions } from './const';
import { Action } from './types';

const useOptionsActions = (dispatch: Dispatch<Action>) => {
  return useMemo(() => {
    const handleAddOption = () => {
      dispatch({ type: optionsActions.addOption });
    };
  
    const handleDeleteVariant = (index: number) => {
      dispatch({ type: optionsActions.deleteVariant, payload: { index } });
    };

    return {
      handleAddOption,
      handleDeleteVariant,
    }
  }, []);
};

export default useOptionsActions;
