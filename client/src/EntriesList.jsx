import React, { useState, useEffect } from 'react';
import Entry from './Entry';
import LinkComponent from './LinkComponent';

export default function EntriesList() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/entries');
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

  return (
    <div>
      <LinkComponent
        href={'#'}
        placeholder={'Create New (link)'}
        className="text-indigo-500"
      />

      {entries.map((entry) => (
        <Entry
          key={entry.entryId}
          location={entry.location}
          travelDate={entry.travelDate}
          blurb={entry.blurb}
          imageUrl={entry.imageUrl}
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
