import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Entry from './Entry';
import LinkComponent from './LinkComponent';

export default function EntryView() {
  const [entry, setEntry] = useState();
  const { entryId } = useParams();

  // Fetches entry by entryId
  useEffect(() => {
    const fetchEntry = async () => {
      try {
        const res = await fetch(`/api/entries/${entryId}`);

        if (!res.ok) {
          throw new Error('Network response was not okay');
        }

        const entryData = await res.json();
        setEntry(entryData);
      } catch (error) {
        console.error(error);
      }
    };

    if (entryId) {
      fetchEntry();
    }
  }, [entryId]);

  if (!entry) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Entry entry={entry} />
      <LinkComponent
        to="/list"
        placeholder="Back"
        className="text-indigo-500"
      />
    </div>
  );
}
