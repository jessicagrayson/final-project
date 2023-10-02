import { useEffect, useState } from 'react';
import Form from './Form.jsx';
import GophrLogo from './GophrLogo.jsx';
import './App.css';

export default function App() {
  const [serverData, setServerData] = useState('');

  useEffect(() => {
    async function readServerData() {
      const resp = await fetch('/api/hello');
      const data = await resp.json();

      console.log('Data from server:', data);

      setServerData(data.message);
    }

    readServerData();
  }, []);

  return (
    <>
      <div>
        <GophrLogo />
        <Form />
      </div>
      <h1>{serverData}</h1>
    </>
  );
}
