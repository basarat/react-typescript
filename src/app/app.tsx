import React from 'react';
import ReactDOM from 'react-dom';
import { Counter, useCounterState } from '../components/counter';

function useAppState() {
  const counterOne = useCounterState();
  return {
    counterOne,
  }
}

const App: React.FC = () => {
  const appState = useAppState();
  return (
    <div>
      <h1>Hello</h1>
      <Counter counterState={appState.counterOne} />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById("root")
);