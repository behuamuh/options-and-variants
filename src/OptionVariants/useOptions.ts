import { useReducer } from 'react';

import optionsReducer from './optionsReducer';
import getVariants from './optionsReducer/getVariants';
import { AppReducer, AppState, VariantType } from './types';

const markDeletedVariants = (variants: VariantType[], initVariants?: VariantType[]) => {
  if (initVariants) {
    variants.forEach(variant => {
      const initVariant = initVariants
        .find(init => init.selectedOptions.join() === variant.selectedOptions.join());

      if (!initVariant) variant.deleted = true;
    })
  }
};

const getInitState = (initState?: AppState) => {
  const options = initState?.options || [];
  const variants = getVariants(options);

  markDeletedVariants(variants, initState?.variants);

  return { options, variants };
};

const useOptions = (initState?: AppState) => {
  const [
    state,
    dispatch,
  ] = useReducer<AppReducer, AppState | undefined>(optionsReducer, initState, getInitState);

  return { state, dispatch };
};

export default useOptions;
