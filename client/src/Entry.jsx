import React, { useState, useEffect } from 'react';
import ImageField from './ImageField';
import LinkComponent from './LinkComponent';
import Input from './Input';
import BlurbComponent from './BlurbComponent';

export default function Entry() {
  const [location, setLocation] = useState('');
  const [travelDate, setTravelDate] = useState('');
  const [blurb, setBlurb] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  // Default value should be an empty string - update when testing is complete
  const [entryId, setEntryId] = useState(1);

  const fetchEntry = async (entryId) => {
    try {
      const res = await fetch(`/api/entries/${entryId}`);
      if (!res.ok) {
        throw new Error('Network response was not okay');
      }
      const entryData = await res.json();
      setLocation(entryData.location);
      setTravelDate(entryData.travelDate);
      setBlurb(entryData.blurb);
      setImageUrl(entryData.imageUrl);
    } catch (error) {
      console.error(error);
    }
  };

  const handleEntryClick = () => {
    setEntryId(1);
  };

  useEffect(() => {
    if (entryId) {
      fetchEntry(entryId);
    } else {
      setLocation('');
      setTravelDate('');
      setBlurb('');
      setImageUrl('');
    }
  }, [entryId]);

  return (
    <div>
      <form className="flex flex-col">
        <Input
          onChange={(e) => setLocation(e.target.value)}
          className="text-indigo-400"
          placeholder="Location"
          value={location}
        />
        <Input
          onChange={(e) => setTravelDate(e.target.value)}
          className="text-indigo-400"
          placeholder="Travel Date"
          value={travelDate}
        />
        <ImageField
          onChange={(e) => setImageUrl(e.target.value)}
          src={imageUrl}
          placeholder="Image URL"
          value={imageUrl}
        />
        <BlurbComponent
          onChange={(e) => setBlurb(e.target.value)}
          className="text-black"
          placeholder="Blurb"
          value={blurb}
        />
        {/* This link will be a back link, update when done testing */}
        <LinkComponent
          href={'#'}
          placeholder={'testing entry render'}
          className="text-indigo-500"
          onClick={handleEntryClick}
        />
      </form>
    </div>
  );
}
