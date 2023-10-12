import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Input from './Input';
import CustomButton from './CustomButton';
import ImageField from './ImageField';
import LinkComponent from './LinkComponent';

export default function EntryForm() {
  const navigate = useNavigate();
  const loc = useLocation();
  const entry = loc.state;

  const isUpdating = !!entry;
  const entryId = entry ? entry.entryId : null;

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
      const req = {
        method: method,
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${sessionStorage.getItem('token')}`,
        },
        body: JSON.stringify(newEntry),
      };

      const res = await fetch(url, req);

      if (!res.ok) {
        throw new Error(`Fetch error ${res.status}`);
      }
      const entry = await res.json();
      navigate('/list');
      console.log('Uploaded:', entry);
    } catch (error) {
      alert(`Error creating entry:, ${error}`);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center justify-center gap-y-12">
        <h3 className="text-lg font-medium">Create an entry </h3>
        <div className="flex items-end justify-center">
          <form onSubmit={handleSubmit} className="flex flex-col ml-4">
            <div className="flex flex-col gap-y-12">
              <div className="flex flex-col">
                <label htmlFor="location" className="text-indigo-600">
                  Location:
                </label>
                <Input
                  onChange={handleLocationChange}
                  value={location}
                  className="border-2 border-indigo-400 rounded-sm text-zinc-600 focus:bg-white bg-zinc-100 w-80 h-9"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="date" className="text-indigo-600">
                  Date:
                </label>
                <Input
                  onChange={handleTravelDateChange}
                  value={travelDate}
                  className="border-2 border-indigo-400 rounded-sm text-zinc-600 focus:bg-white bg-zinc-100 w-80 h-9"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="url" className="text-indigo-600">
                  Image Url:
                </label>
                <Input
                  onChange={handleImageUrlChange}
                  value={imageUrl}
                  className="border-2 border-indigo-400 rounded-sm text-zinc-600 focus:bg-white bg-zinc-100 w-80 h-9"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="blurb" className="text-indigo-600">
                  Blurb:
                </label>
                <Input
                  onChange={handleBlurbChange}
                  value={blurb}
                  className="h-40 border-2 border-indigo-400 text-zinc-600 focus:bg-white bg-zinc-100 w-80"
                />
              </div>
              <CustomButton
                className={
                  'hover:bg-white hover:text-indigo-500 hover:border-2 hover:border-indigo-400 h-9 text-white bg-indigo-500 rounded-sm w-65'
                }
                label="Submit"
              />
              <div className="flex justify-end w-full">
                <LinkComponent
                  to="/list"
                  placeholder="Back"
                  className="text-indigo-500"
                />
              </div>
              <ImageField src={imageUrl} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
