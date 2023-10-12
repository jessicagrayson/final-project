import React, { useState, useEffect } from 'react';
import Entry from './Entry';
import LinkComponent from './LinkComponent';

export default function EntriesList() {
  const [entries, setEntries] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const req = {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem('token')}`,
          },
        };
        console.log('storage:', sessionStorage);
        console.log('req:', req);

        const res = await fetch('/api/entries', req);
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await res.json();
        console.log('data:', data);
        setEntries(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <LinkComponent
        to="/create-entry"
        placeholder="Create New Entry"
        className="text-indigo-500"
      />
      <LinkComponent to="/" placeholder="Back" className="text-indigo-500" />

      {entries.map((entry) => (
        <Entry key={entry.entryId} entry={entry} />
      ))}
    </div>
  );
}
