import React, { useMemo, useCallback } from 'react';
import ReactDOM from 'react-dom';
import { Counter, useCounter, UseCounter } from '../components/counter';

function Loop<T>({ items, children }: { items: T[], children: (item: T, index: number) => React.ReactElement | null }) {
  const Child = (props: { item: T, index: number }) => children(props.item, props.index);
  return (
    <>
      {items.map((item, index) => <Child key={index} item={item} index={index} />)}
    </>
  );
}

function useApp() {
  const [count, setCount] = React.useState(1);
  const addCounter = () => setCount(count + 1);

  return {
    count,
    addCounter,
  }
}

const App: React.FC = () => {
  const appState = useApp();
  return (
    <div>
      <h1>Hello</h1>
      <button onClick={appState.addCounter}>Add counter</button>
      <Loop items={[...new Array<null>(appState.count)]}>
        {
          (_, i) => {
            const use = useCounter();
            return (
              <Counter key={i} use={use} />
            );
          }
        }
      </Loop>
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById("root")
);
