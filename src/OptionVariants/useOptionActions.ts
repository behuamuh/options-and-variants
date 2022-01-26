import { ChangeEvent, useMemo } from 'react';

import { optionsActions } from './const';
import { OptionProps } from './types';

const useOptionActions = (props: OptionProps) => {
  const { dispatch, option, index } = props;

  return useMemo(() => {
    const handleDeleteOption = () => {
      dispatch({
        type: optionsActions.deleteOption,
        payload: { index },
      })
    };
  
    const handleChangeOptionName = (name: string) => {
      dispatch({
        type: optionsActions.changeOption,
        payload: {
          index,
          option: {
            ...option,
            name,
          }
        }
      });
    };
  
    const handleChangeOptionVariant = (value: string, variantIndex: number) => {
      option.variants[variantIndex] = value;
  
      dispatch({
        type: optionsActions.changeOptionVariants,
        payload: {
          index,
          option: {
            ...option,
            variants: option.variants.slice(),
          }
        }
      });
    };
  
    const handleDeleteOptionVariant = (variantIndex: number) => {
      dispatch({
        type: optionsActions.changeOptionVariants,
        payload: {
          index,
          option: {
            ...option,
            variants: option.variants.filter((_, i) => i !== variantIndex),
          }
        }
      });
    };
  
    const handleAddOptionVariant = () => {
      dispatch({
        type: optionsActions.changeOption,
        payload: {
          index,
          option: {
            ...option,
            variants: option.variants.concat(''),
          }
        }
      });
    };

    return {
      handleDeleteOption,
      handleChangeOptionName,
      handleChangeOptionVariant,
      handleDeleteOptionVariant,
      handleAddOptionVariant,
    }
  }, [dispatch, option, index]);
};

export default useOptionActions;
