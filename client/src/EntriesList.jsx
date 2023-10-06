import React, { useState, useEffect } from 'react';
import Entry from './Entry';
import LinkComponent from './LinkComponent';

export default function EntriesList() {
  const [entries, setEntries] = useState([]);
  // const [entryId, setEntryId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/entries');
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await res.json();
        console.log('before:', data);
        setEntries(data);
        console.log('after:', data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <LinkComponent
        href={'#'}
        placeholder={'Create New (link)'}
        className="text-indigo-500"
      />

      {entries.map((entry) => (
        <Entry
          // onChange={() => setEntryId(entryId)}
          key={entry.entryId}
          // location={entry.location}
          // travelDate={entry.travelDate}
          // blurb={entry.blurb}
          // imageUrl={entry.imageUrl}
        />
      ))}

      <LinkComponent
        href={'#'}
        placeholder={'Back (link)'}
        className="text-indigo-500"
      />
    </div>
  );
}
