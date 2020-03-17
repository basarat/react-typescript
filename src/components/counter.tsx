import React from 'react';

export type CounterState = {
  count: number,
  increment: () => void,
}

export function useCounterState(): CounterState {
  const [count, changeCount] = React.useState(0);
  return {
    count,
    increment: () => changeCount(count + 1),
  };
}


export const Counter: React.FC<{ counterState: CounterState }> = ({ counterState }) => {
  return (
    <div>
      <button onClick={counterState.increment}>Increment</button>
      <div>Count: {counterState.count}</div>
    </div>
  );
};
