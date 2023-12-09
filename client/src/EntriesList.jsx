import React, { useState, useEffect } from 'react';
import Entry from './Entry';
import LinkComponent from './LinkComponent';

export default function EntriesList() {
  const [entries, setEntries] = useState([]);
  const noEntries = 'No entries to display';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const req = {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem('token')}`,
          },
        };

        const res = await fetch('/api/entries', req);
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await res.json();
        setEntries(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const entriesList = []
    .concat(entries)
    .sort((a, b) => (a.entryId > b.entryId ? -1 : 1));

  return (
    <div>
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-2 gap-x-3">
        {entriesList.map((entry) => (
          <Entry key={entry.entryId} entry={entry} />
        ))}
      </div>
      {entriesList.length === 0 && (
        <div className="flex flex-col items-center justify-center h-screen text-xl">
          {noEntries}
          <LinkComponent
            placeholder={'Create New'}
            to="/create-entry"
            className="text-indigo-500 text-md hover:underline"
          />
        </div>
      )}
    </div>
  );
}
