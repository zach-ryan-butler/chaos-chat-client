import React, { useState } from 'react';
import ClientSocket from './ClientSocket';

export default function App() {
  const [loadClient, setLoadClient] = useState(true);

  return (
    <>
      <button onClick={() => setLoadClient(prevState => !prevState)}>
        Click Me
      </button>
      {loadClient ? <ClientSocket /> : null}
    </>
  );
}
