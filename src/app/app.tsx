import React from 'react';
import ReactDOM from 'react-dom';
import { Counter, useCounter } from '../components/counter';

function useAppState() {
  const counterOne = useCounter();
  return {
    counterOne,
  }
}

const App: React.FC = () => {
  const appState = useAppState();
  return (
    <div>
      <h1>Hello</h1>
      <Counter use={appState.counterOne} />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById("root")
);