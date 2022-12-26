import React, {useReducer} from 'react';
import Button from '../components/Button';
import Panel from '../components/Panel';

const INC = 'increment_count';
const DEC = 'decrement_count';
const CHANGE_VAL = 'change_value';
const ADD_VALUE_TO_COUNT = 'add_value_to_count';

const reducer = (state, action) => {
  switch (action.type) {
    case INC:
      return {...state, count: state.count + 1}
    case DEC:
      return {...state, count: state.count - 1}
    case CHANGE_VAL:
      return {...state, valToAdd: action.payload }
    case ADD_VALUE_TO_COUNT:
      return {...state, count: state.count + state.valToAdd, valToAdd: 0}
    default:
      return state;
  }
}

export default function CounterPage({initalCount}) {
  const [state, dispatch] = useReducer(reducer, {
    count: initalCount,
    valueToAdd: 0
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({type: ADD_VALUE_TO_COUNT})
  }
  
  return (
    <Panel className="m-3">
      <h1 className="text-lg">Count is {state.count}</h1>
      <div className='flex flex-row'>
        <Button onClick={() => dispatch({type: INC})}>Increment</Button>
        <Button onClick={() => dispatch({type: DEC})}>Decrement</Button>
      </div>

      <form className='flex flex-col w-24' onSubmit={handleSubmit}>
        <label>Add a lot!</label>
        <input type="number" className="p-1 m-3 bg-gray-50 border border-gray-500"
          value={state.valToAdd || ""}
          onChange={(e) => dispatch({type: CHANGE_VAL, payload: parseInt(e.target.value) || 0})}
        />
        <Button>Add it!</Button>
      </form>
    </Panel>
  )
}