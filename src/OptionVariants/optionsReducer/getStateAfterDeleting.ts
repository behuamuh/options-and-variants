import { AppState } from '../types';
import getDeletedOptionVariants from './getDeletedOptionVariants';
import getVariants from './getVariants';
import syncVariants from './syncVariants';

const getStateAfterDeleting = (props: AppState) => {
  let { variants, options } = props;
  variants = variants.slice();

  const deletedOptionVariants = getDeletedOptionVariants(variants);

  if (deletedOptionVariants.length) {
    options = options.slice();

    deletedOptionVariants.forEach(({ optionIndex, variant }) => {
      const option = options[optionIndex];
      option.variants = option.variants.filter(v => v !== variant);
    });

    options = options.filter(({ variants }) => variants.length);
    const prevVariants = variants;
    variants = getVariants(options);
    syncVariants(prevVariants, variants);
  }

  return { options, variants };
};

export default getStateAfterDeleting;
