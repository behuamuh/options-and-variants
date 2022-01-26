import './App.css';
import Option from './Option';
import { AppState, useOptions, useOptionsActions } from './OptionVariants';
import Variant from './Variant';


let initState: AppState;

try {
  const stateStr = localStorage.getItem('OPTIONS');
  if (stateStr) initState = JSON.parse(stateStr);
} catch (error) {
  console.log(error);
}

const App = () => {
  const { state, dispatch } = useOptions(initState);
  const { handleAddOption, handleDeleteVariant } = useOptionsActions(dispatch);

  const handleSaveState = () => {
    localStorage.setItem('OPTIONS', JSON.stringify({
      ...state,
      variants: state.variants
        .filter(({ deleted }) => !deleted)
        .map(({ selectedOptions }) => ({ selectedOptions })),
    }))
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={handleSaveState}>Save state</button>
        <button onClick={handleAddOption}>Add option</button>
        {state.options.map((option, index) => (
          <Option
            key={index}
            index={index}
            option={option}
            dispatch={dispatch}
          />
        ))}
        {state.variants.map((v, index) => (
          <Variant key={index} variant={v} onDelete={() => handleDeleteVariant(index)} />
        ))}
      </header>
    </div>
  );
}

export default App;
