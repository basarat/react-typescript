import React from 'react';

export type UseCounter = {
  count: number,
  increment: () => void,
}

export function useCounter(): UseCounter {
  const [count, setCount] = React.useState(0);
  return {
    count,
    increment: () => setCount(count + 1),
  };
}


export const Counter: React.FC<{ use: UseCounter }> = ({ use }) => {
  return (
    <div>
      <button onClick={use.increment}>Increment</button>
      <div>Count: {use.count}</div>
    </div>
  );
};
