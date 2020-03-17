import React from 'react';
import ReactDOM from 'react-dom';
import { CounterState, Counter, useCounterState } from '../components/counter';

function useAppState() {
  const counter = useCounterState();
  const counterSecond = useCounterState();
  return {
    counter,
    counterSecond
  }
}

const App: React.FC = (props) => {
  const appState = useAppState();
  return (
    <div>
      <h1>Hello</h1>
      <Counter counterState={appState.counter} />
      <Counter counterState={appState.counterSecond} />
      Sum with hooks : {appState.counter.count + appState.counterSecond.count}
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById("root")
);