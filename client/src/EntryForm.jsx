import React, { useState } from 'react';
import Input from './Input';
import CustomButton from './CustomButton';
import ImageField from './ImageField';
import LinkComponent from './LinkComponent';

export default function EntryForm({ entry }) {
  const [location, setLocation] = useState('');
  const [travelDate, setTravelDate] = useState('');
  const [blurb, setBlurb] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleTravelDateChange = (e) => {
    setTravelDate(e.target.value);
  };

  const handleBlurbChange = (e) => {
    setBlurb(e.target.value);
  };

  const handleImageUrlChange = (e) => {
    setImageUrl(e.target.value);
  };

  const handleSubmit = async (e) => {
    // Remove this preventDefault when done testing
    e.preventDefault();
    // Creates new entry object from values
    const newEntry = {
      location: location,
      travelDate: travelDate,
      blurb: blurb,
      imageUrl: imageUrl,
    };

    try {
      const res = await fetch('/api/entryform', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(newEntry),
      });
      if (!res.ok) {
        throw new Error(`Fetch error ${res.status}`);
      }
      const entry = await res.json();
      console.log('Uploaded:', entry);
    } catch (error) {
      alert(`Error creating entry:, ${error}`);
    }
  };
  console.log('entry test:', entry);

  return (
    <div>
      <LinkComponent
        to="/list"
        placeholder="Back"
        className="text-indigo-500"
      />

      <form onSubmit={handleSubmit} className="flex flex-col ml-4">
        <label htmlFor="location" className="text-indigo-600">
          Location
        </label>
        <Input
          onChange={handleLocationChange}
          className="mt-5 ml-10 border-2 border-indigo-400 rounded-sm bg-zinc-200 w-80 h-9"
          // value={entry.location}
        />
        <label htmlFor="date" className="text-indigo-600">
          Date
        </label>
        <Input
          onChange={handleTravelDateChange}
          className="mt-5 ml-10 border-2 border-indigo-400 rounded-sm bg-zinc-200 w-80 h-9"
        />
        <label htmlFor="url" className="text-indigo-600">
          Image Url
        </label>
        <Input
          onChange={handleImageUrlChange}
          className="mt-5 ml-10 border-2 border-indigo-400 rounded-sm bg-zinc-200 w-80 h-9"
        />
        <label htmlFor="blurb" className="text-indigo-600">
          Blurb
        </label>
        <Input
          onChange={handleBlurbChange}
          className="h-40 mt-5 ml-10 border-2 border-indigo-400 bg-zinc-200 w-80"
        />
        <ImageField src={imageUrl} />
        <CustomButton label="Submit" />
      </form>
    </div>
  );
}
