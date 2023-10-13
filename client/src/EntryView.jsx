import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import Entry from './Entry';
import LinkComponent from './LinkComponent';
// import { ImgWithCaption } from './ImgWithCaption';

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
    <div className="">
      <LinkComponent
        to="/list"
        placeholder="Back"
        className="text-indigo-500"
      />

      <div className="flex items-center justify-center">
        {/* <Entry entry={entry} /> */}
        <div className="flex flex-col items-center justify-center w-3/4 px-12 py-8 bg-slate-100">
          <div className="w-full">
            <p className="text-xl font-medium">
              {entry.location} | {formatISODate(entry.travelDate)}
            </p>
          </div>
          <div className="flex">
            <div className="w-1/2">
              <img src={entry.imageUrl} alt="" />
            </div>
            {/* <ImgWithCaption src={entry.imageUrl} value={entry.blurb} /> */}
            <div className="w-1/2 ml-4">
              <p>{entry.blurb}</p>
            </div>
          </div>
          <div className="w-full mt-4">
            <LinkComponent
              to="/update-entry/:entryId"
              state={entry}
              placeholder="Edit Entry"
              className="text-indigo-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
