import { useEffect, useState } from 'react';

interface Props {
  value: string;
  onChange: (v: string, index: number) => void;
  onDelete: (index: number) => void;
  index: number;
}

const OptionVariant = (props: Props) => {
  const { index, value, onChange, onDelete } = props;
  const [input, setInput] = useState(value);

  useEffect(() => {
    if (!input) return;

    onChange(input, index);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [input]);

  useEffect(() => {
    setInput(value);
  }, [value]);

  const handleBlur = () => {
    if (input) return;

    setInput(value);
  }

  return (
    <li>
      <input
        type="text"
        data-variant={index}
        onChange={e => setInput(e.currentTarget.value)}
        value={input}
        onBlur={handleBlur}
      />
      <button value={index} onClick={() => onDelete(index)}>X</button>
    </li>
  );
}

export default OptionVariant;
