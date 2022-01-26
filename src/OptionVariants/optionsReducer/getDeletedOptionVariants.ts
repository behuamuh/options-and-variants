import { VariantType } from '../types';

const getDeletedOptionVariants = (variants: VariantType[]) => {
  const result: { optionIndex: number, variant: string }[] = [];

  const deletedVariants = variants.filter(({ deleted }) => deleted);
  
  deletedVariants.forEach(deleted => {
    deleted.selectedOptions.forEach((variant, optionIndex) => {
      const allVariantsDeleted = variants
        .filter(({ selectedOptions }) => selectedOptions.includes(variant))
        .every(({ deleted }) => deleted);
  
      if (allVariantsDeleted) result.push({ optionIndex, variant });
    });
  });
  
  return result;
};

export default getDeletedOptionVariants;
