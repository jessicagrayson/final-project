import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Entry from './Entry';
import LinkComponent from './LinkComponent';

export default function EntryView() {
  const [entry, setEntry] = useState();
  const { entryId } = useParams();
  const [isClicked, setIsClicked] = useState(false);

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

  if (!isClicked) {
    setIsClicked(!isClicked);
    const updateEntry = entry;
    console.log('UPDATE:', updateEntry);
    setEntry(updateEntry);
  }

  return (
    <div>
      <Entry entry={entry} />
      <LinkComponent
        to="/list"
        placeholder="Back"
        className="text-indigo-500"
      />
      <LinkComponent
        onClick={() => setIsClicked(!isClicked)}
        to="/create-entry"
        entry={entry}
        placeholder="Edit Entry"
        className="text-indigo-500"
      />
    </div>
  );
}
