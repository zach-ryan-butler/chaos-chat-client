import React, { useState, useEffect } from 'react';
import socketIOClient from 'socket.io-client';
const ENDPOINT = 'http://127.0.0.1:4001';

export default function App() {
  const [response, setResponse] = useState('');

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    console.log(socket);
    socket.on('FromAPI', data => {
      setResponse(data);
    });
  }, []);

  return (
    <p>
      It&apos;s <time dateTime={response}>{response}</time>
    </p>
  );
}
