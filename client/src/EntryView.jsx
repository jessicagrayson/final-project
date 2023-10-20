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
        <div className="flex flex-col-reverse items-center justify-center px-12 py-8 lg:w-3/4 md:w-3/4">
          <div className="w-full">
            {/* <p className="text-xl font-medium">
              {entry.location} | {formatISODate(entry.travelDate)}
            </p> */}
          </div>
          <div className="flex flex-col lg:flex-row md:flex-row">
            <div className="w-full lg:w-2/3 md:2/3">
              <img src={entry.imageUrl} className="rounded-md" />
            </div>
            <div className="flex flex-col w-full p-2 rounded-sm lg:ml-4 md:ml-4 lg:w-1/3 md:w-1/3 bg-slate-100">
              <p className="font-medium text-md">
                {entry.location} | {formatISODate(entry.travelDate)}
                <ViewMenu />
              </p>
              <p className="leading-normal">{entry.blurb}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
