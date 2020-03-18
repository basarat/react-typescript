import React from 'react';
import ReactDOM from 'react-dom';
import { Counter, useCounter } from '../components/counter';

function useApp() {
  const counterOne = useCounter();
  const counterTwo = useCounter();
  const sum = counterOne.count + counterTwo.count;
  return {
    counterOne,
    counterTwo,
    sum,
  }
}

const App: React.FC = () => {
  const appState = useApp();
  return (
    <div>
      <h1>Hello</h1>
      <Counter use={appState.counterOne} />
      <Counter use={appState.counterTwo} />
      <div>Sum : {appState.sum}</div>
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById("root")
);