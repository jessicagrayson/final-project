import { useEffect, useState } from 'react';
import Form from './Form.jsx';
import EntryForm from './EntryForm.jsx';
// import Entry from './Entry.jsx';
import EntryView from './EntryView.jsx';
import EntriesList from './EntriesList.jsx';
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
        <EntryForm />
        {/* <Entry /> */}
        <EntryView />
        <EntriesList />
      </div>
      <h1>{serverData}</h1>
    </>
  );
}
