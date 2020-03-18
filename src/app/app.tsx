import React from 'react';
import ReactDOM from 'react-dom';
import { Counter, useCounter, UseCounter } from '../components/counter';

function useApp() {
  const [count, setCount] = React.useState(1);
  const addCounter = () => setCount(count + 1);
  const counters = [...new Array<UseCounter>(count)].map(useCounter);

  const sum = counters.reduce((a, c) => a + c.count, 0);
  return {
    addCounter,
    counters,
    sum,
  }
}

const App: React.FC = () => {
  const appState = useApp();
  return (
    <div>
      <h1>Hello</h1>
      <button onClick={appState.addCounter}>Add counter</button>
      {appState.counters.map((use, i) => (<Counter key={i} use={use} />))}
      <div>Sum : {appState.sum}</div>
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById("root")
);