import React from 'react';
import ReactDOM from 'react-dom';
import { Counter, useCounter, UseCounter } from '../components/counter';

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
      {[...new Array<null>(appState.count)].map((_, i) => {
        const use = useCounter();
        return (
          <Counter key={i} use={use} />
        );
      })}
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById("root")
);
