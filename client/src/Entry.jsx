// import React, { useState, useEffect } from 'react';
import ImageField from './ImageField';
import LinkComponent from './LinkComponent';
import Input from './Input';
import BlurbComponent from './BlurbComponent';

export default function Entry({ entry }) {
  // const [entries, setEntries] = useState('');

  // useEffect(() => {
  //   async function fetchEntries() {
  //     try {
  //       const res = await fetch(`/api/entries`);
  //       if (!res.ok) throw new Error(`fetch error: ${res.status}`);
  //       const entries = await res.json();
  //       setEntries(entries);
  //     } catch (error) {
  //       throw new Error('fetch error');
  //     }
  //   }
  //   fetchEntries();
  // }, []);
  // console.log(entry);
  return (
    <div>
      <form className="flex flex-col">
        <Input
          className="text-indigo-400"
          placeholder="Location"
          value={entry.location}
        />
        <Input
          className="text-indigo-400"
          placeholder="Travel Date"
          value={entry.travelDate}
        />
        <ImageField
          src={entry.imageUrl}
          placeholder="Image URL"
          value={entry.imageUrl}
        />
        <BlurbComponent
          className="text-black"
          placeholder="Blurb"
          value={entry.blurb}
        />
        {/* This link will be an expand link, update when done testing */}
        <LinkComponent
          href={'#'}
          placeholder={'Expand (link)'}
          className="text-indigo-500"
        />
      </form>
    </div>
  );
}
