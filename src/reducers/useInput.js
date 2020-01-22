import { useReducer } from 'react';

function reducer(state, action) {
  return action;
}

export default function useInput(init) {
  const [state, dispatch] = useReducer(reducer, init);
  const onchange = e => {
    e.target ?
    dispatch(e.target.value) :
    dispatch(e);
  };
  return [state, onchange];
}