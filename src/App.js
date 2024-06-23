import React, { useState, useEffect } from 'react';

const connectionString = process.env.DATABASE_CONNECTION_STRING;

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    (async function () {
      const { text } = await( await fetch(`/api/message`)).json();
      setData(text);
    })();
  });

  return <div>{data}-{connectionString}</div>;
}

export default App;