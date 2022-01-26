import { VariantType } from './OptionVariants';

interface Props {
  variant: VariantType;
  onDelete: () => void;
}

const Variant = (props: Props) => {
  const { variant, onDelete } = props;
  const title = variant.selectedOptions.filter(Boolean).join('/');

  if (!title) return null;

  return (
    <div className={`Variant ${variant.deleted ? "Variant_deleted" : ""}`}>
      <strong>{title}</strong>
      <button onClick={onDelete}>X</button>
    </div>
  );
}

export default Variant;
