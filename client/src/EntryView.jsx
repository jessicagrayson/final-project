import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Entry from './Entry';
import LinkComponent from './LinkComponent';

export default function EntryView() {
  const [entry, setEntry] = useState();
  const { entryId } = useParams();
  // const [isClicked, setIsClicked] = useState(false);

  // console.log('entry:', entry);
  // Fetches entry by entryId
  useEffect(() => {
    // console.log('entry:', entry);

    const fetchEntry = async () => {
      try {
        const res = await fetch(`/api/entries/${entryId}`);
        // console.log('entry:', entry);

        if (!res.ok) {
          throw new Error('Network response was not okay');
        }
        // console.log('entry:', entry);

        const entryData = await res.json();
        setEntry(entryData);
        // console.log('entryData:', entryData);
      } catch (error) {
        console.error(error);
      }
      // console.log('entry:', entry);
    };

    if (entryId) {
      fetchEntry();
    }
  }, [entryId]);
  // console.log('entry:', entry);

  if (!entry) {
    return <div>Loading...</div>;
  }
  console.log('entry view:', entry);

  return (
    <div>
      <Entry entry={entry} />
      <LinkComponent
        to="/list"
        placeholder="Back"
        className="text-indigo-500"
      />
      <LinkComponent
        to="/update-entry"
        state={entry}
        placeholder="Edit Entry"
        className="text-indigo-500"
      />
    </div>
  );
}
