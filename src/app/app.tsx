import React from 'react';
import ReactDOM from 'react-dom';
import { Counter, useCounter } from '../components/counter';

function useApp() {
  return {
  }
}

const App: React.FC = () => {
  const appState = useApp();
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById("root")
);