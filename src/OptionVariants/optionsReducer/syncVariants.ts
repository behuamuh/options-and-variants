import { VariantType } from '../types';
type SyncVariants = (prev: VariantType[], next: VariantType[]) => void;

const syncTwo = (prev: VariantType, next: VariantType) => {
  const { selectedOptions, ...rest } = prev;
  Object.assign(next, rest);
}

const syncEqualLengths: SyncVariants = (prev, next) => {
  for (let i = 0; i < next.length; i++) {
    if (!prev[i]) continue;

    syncTwo(prev[i], next[i]);
  }
};

const syncNextMore: SyncVariants = (prev, next) => {
  const prevDeleted = prev.filter(({ deleted }) => deleted);

  for (const d of prevDeleted) {
    const prevStr = d.selectedOptions.join();

    const index = next.findIndex(({ selectedOptions }) => {
      const nextStr = selectedOptions.join();
      return nextStr.includes(prevStr);
    });

    if (index !== -1) {
      syncTwo(d, next[index]);
    }
  }
};

const syncPrevMore: SyncVariants = (prev, next) => {
  for (const nextVariant of next) {
    const nextStr = nextVariant.selectedOptions.join();

    const prevVariant = prev.find(({ selectedOptions }) => {
      const prevStr = selectedOptions.join();
      return prevStr.includes(nextStr);
    });

    if (prevVariant?.deleted) syncTwo(prevVariant, nextVariant);
  }
};

const syncVariants: SyncVariants = (prev, next) => {
  let action = syncEqualLengths;

  if (prev.length < next.length) action = syncNextMore;
  if (prev.length > next.length) action = syncPrevMore;
  
  action(prev, next);
};

export default syncVariants;
