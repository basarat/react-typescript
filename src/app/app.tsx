import React from 'react';
import ReactDOM from 'react-dom';
import { CounterState, Counter, useCounterState } from '../components/counter';

function useAppState() {
  const counterOne = useCounterState();
  const counterSecond = useCounterState();
  const sum = counterOne.count + counterSecond.count;
  return {
    counterOne,
    counterSecond,
    sum,
  }
}

const App: React.FC = () => {
  const appState = useAppState();
  return (
    <div>
      <h1>Hello</h1>
      <Counter counterState={appState.counterOne} />
      <Counter counterState={appState.counterSecond} />
      Sum : {appState.sum}
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById("root")
);