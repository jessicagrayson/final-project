/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import LinkComponent from './LinkComponent';
import ViewMenu from './EntryViewMenu';

export default function EntryView() {
  const [entry, setEntry] = useState();
  const { entryId } = useParams();
  const navigate = useNavigate();

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

  // Formats entry date
  function formatISODate(isoDate) {
    const date = new Date(isoDate);
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      timeZone: 'UCT',
    };
    return date.toLocaleDateString('en-US', options);
  }

  if (!entry) {
    return <div>Loading...</div>;
  }

  return (
    <div className="ml-2">
      <LinkComponent
        to="/list"
        placeholder="Back"
        className="text-xl text-indigo-500 hover:underline"
      />
      <div className="flex items-center justify-center">
        <div className="flex flex-col items-center justify-center w-3/4 px-12 py-8 bg-slate-100">
          <div className="w-full">
            <p className="text-xl font-medium">
              {entry.location} | {formatISODate(entry.travelDate)}
            </p>
          </div>
          <div className="flex">
            <div className="w-2/3">
              <img src={entry.imageUrl} />
            </div>
            <div className="w-1/3 ml-4">
              <p>{entry.blurb}</p>
              <ViewMenu />
            </div>
          </div>
          <div className="w-full mt-4"></div>
        </div>
      </div>
    </div>
  );
}
