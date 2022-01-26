import OptionVariant from './OptionVariant';
import { OptionProps, useOptionActions } from './OptionVariants';

const Option = (props: OptionProps) => {
  const { name, variants } = props.option;

  const {
    handleAddOptionVariant,
    handleDeleteOption,
    handleChangeOptionName,
    handleChangeOptionVariant,
    handleDeleteOptionVariant,
  } = useOptionActions(props);

  return (
    <div className="App">
      <h3>
        Option name
        <button onClick={handleDeleteOption}>Delete option</button>
      </h3>
      <input 
        type="text"
        value={name}
        onChange={e => handleChangeOptionName(e.currentTarget.value)} 
      />
      <ul>
        {variants.map((v, i) => (
          <OptionVariant
            key={i}
            index={i}
            value={v}
            onChange={handleChangeOptionVariant}
            onDelete={handleDeleteOptionVariant}
          />
        ))}
      </ul>
      <button onClick={handleAddOptionVariant}>Add variant</button>
    </div>
  );
}

export default Option;
