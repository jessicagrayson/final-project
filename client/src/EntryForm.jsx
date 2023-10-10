import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Input from './Input';
import CustomButton from './CustomButton';
import ImageField from './ImageField';
import LinkComponent from './LinkComponent';

export default function EntryForm() {
  const loc = useLocation();
  const entry = loc.state;
  const isUpdating = !!entry;
  const entryId = entry.entryId;
  console.log('entryId?', entryId);
  // Entry state variables
  const [location, setLocation] = useState(entry?.location ?? '');
  const [travelDate, setTravelDate] = useState(entry?.travelDate ?? '');
  const [blurb, setBlurb] = useState(entry?.blurb ?? '');
  const [imageUrl, setImageUrl] = useState(entry?.imageUrl ?? '');

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
      const method = isUpdating ? 'PUT' : 'POST';
      const url = isUpdating ? `/api/update/${entryId}` : '/api/entryform';

      const res = await fetch(url, {
        method: method,
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(newEntry),
      });
      if (!res.ok) {
        throw new Error(`Fetch error ${res.status}`);
      }
      const entry = await res.json();
      // Replace w/ pop up modal - conditional depending on isUpdating
      console.log('Uploaded:', entry);
    } catch (error) {
      alert(`Error creating entry:, ${error}`);
    }
  };

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
          value={location}
          className="mt-5 ml-10 border-2 border-indigo-400 rounded-sm bg-zinc-200 w-80 h-9"
        />
        <label htmlFor="date" className="text-indigo-600">
          Date
        </label>
        <Input
          onChange={handleTravelDateChange}
          value={travelDate}
          className="mt-5 ml-10 border-2 border-indigo-400 rounded-sm bg-zinc-200 w-80 h-9"
        />
        <label htmlFor="url" className="text-indigo-600">
          Image Url
        </label>
        <Input
          onChange={handleImageUrlChange}
          value={imageUrl}
          className="mt-5 ml-10 border-2 border-indigo-400 rounded-sm bg-zinc-200 w-80 h-9"
        />
        <label htmlFor="blurb" className="text-indigo-600">
          Blurb
        </label>
        <Input
          onChange={handleBlurbChange}
          value={blurb}
          className="h-40 mt-5 ml-10 border-2 border-indigo-400 bg-zinc-200 w-80"
        />
        <ImageField src={imageUrl} />
        <CustomButton label="Submit" />
      </form>
    </div>
  );
}
