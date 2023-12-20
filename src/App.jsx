import { useState } from 'react';
import './App.css';
import TableData from './components/table/table';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Tu app</h1>
      <TableData/>
    </>
  )
};

export default App;
