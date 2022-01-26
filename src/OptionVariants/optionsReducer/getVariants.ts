import { OptionType } from '../types';

const getVariants = (options: OptionType[]) => {
  const result = [];

  const idxs = Array(options.length).fill(0);
  let i = idxs.length - 1;

  while (i >= 0) {
    const selectedOptions = idxs.map((item, index) => options[index].variants[item]);

    result.push({ selectedOptions, deleted: false });

    while (i >= 0) {
      if (idxs[i] < options[i].variants.length - 1 && options[i].variants[idxs[i]]) {
        idxs[i]++;
        i = idxs.length - 1;
        break;
      }

      idxs[i] = 0;
      i--;
    }
  }

  return result;
};

export default getVariants;
