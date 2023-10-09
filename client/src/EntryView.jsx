import React, { useState, useEffect } from 'react';
import Entry from './Entry';
import LinkComponent from './LinkComponent';

export default function EntryView({ entryId, onChange }) {
  const [entry, setEntry] = useState({});

  const fetchEntry = async (entryId) => {
    try {
      const res = await fetch(`/api/entries/${entryId}`);
      if (!res.ok) {
        throw new Error('Network response was not okay');
      }
      const entryData = await res.json();
      console.log(entryData);
      setEntry(entryData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (entryId) {
      fetchEntry(entryId);
      console.log(entryId);
    }
  }, [entryId]);

  function handleSelect() {
    if (onChange) {
      onChange(entryId);
    }
  }
  console.log(entry);

  return (
    <div>
      <Entry entry={entry} onChange={handleSelect} />
      <LinkComponent
        to="/list"
        placeholder="Back"
        className="text-indigo-500"
      />
    </div>
  );
}
