import React, { useMemo, useCallback, useState } from 'react';
import ReactDOM from 'react-dom';
import { Counter, useCounter, UseCounter } from '../components/counter';

function Loop<T>({ items, children, deps = [] }: { items: T[], children: (item: T, index: number) => React.ReactElement | null, deps?: React.DependencyList }) {
  const Child = useCallback((props: { item: T, index: number }) => children(props.item, props.index), deps);
  return (
    <>
      {items.map((item, index) => <Child key={index} item={item} index={index} />)}
    </>
  );
}


const App: React.FC = () => {
  const [count, setCount] = React.useState(1);
  const addCounter = () => setCount(count + 1);

  const [text, setText] = useState('hello');

  return (
    <div>
      <h1 onClick={() => setText('new')}>{text}</h1>
      <button onClick={addCounter}>Add counter</button>
      <Loop items={[...new Array<null>(count)]}>
        {
          () => {
            const use = useCounter();
            return (
              <Counter use={use} />
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
