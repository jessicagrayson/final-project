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

  // State variables for form fields
  const [location, setLocation] = useState(entry?.location || '');
  const [travelDate, setTravelDate] = useState(entry?.travelDate || '');
  const [blurb, setBlurb] = useState(entry?.blurb || '');
  const [imageUrl, setImageUrl] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    formData.set('location', location);
    formData.set('travelDate', travelDate);
    formData.set('blurb', blurb);

    try {
      const method = isUpdating ? 'PUT' : 'POST';
      const url = isUpdating ? `/api/update/${entryId}` : '/api/entryform';
      const req = {
        method: method,
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem('token')}`,
        },
        body: formData,
      };

      const res = await fetch(url, req);

      if (!res.ok) {
        throw new Error(`Fetch error ${res.status}`);
      }
      const updatedEntry = await res.json();
      navigate('/list');
      console.log('Uploaded:', updatedEntry);
    } catch (error) {
      alert(`Error creating/editing entry: ${error}`);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center justify-center gap-y-12">
        <h3 className="text-lg font-medium">
          {isUpdating ? 'Edit Entry' : 'Create an Entry'}
        </h3>
        <div className="flex items-end justify-center">
          <form onSubmit={handleSubmit} className="flex flex-col ml-4">
            <div className="flex flex-col gap-y-12">
              <div className="flex flex-col">
                <label htmlFor="location" className="text-indigo-600">
                  Location:
                </label>
                <Input
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  name="location"
                  className="border-2 border-indigo-400 rounded-sm text-zinc-600 focus:bg-white bg-zinc-100 w-80 h-9"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="travelDate" className="text-indigo-600">
                  Date:
                </label>
                <Input
                  value={travelDate}
                  onChange={(e) => setTravelDate(e.target.value)}
                  name="travelDate"
                  className="border-2 border-indigo-400 rounded-sm text-zinc-600 focus:bg-white bg-zinc-100 w-80 h-9"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="imageUrl" className="text-indigo-600">
                  Image:
                </label>
                <input
                  type="file"
                  name="imageUrl"
                  accept=".png, .jpg, .jpeg, .gif"
                  onChange={(e) => setImageUrl(e.target.files[0])}
                  className="border-2 border-indigo-400 rounded-sm text-zinc-600 focus:bg-white bg-zinc-100 w-80 h-9"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="blurb" className="text-indigo-600">
                  Blurb:
                </label>
                <Input
                  value={blurb}
                  onChange={(e) => setBlurb(e.target.value)}
                  name="blurb"
                  className="h-40 border-2 border-indigo-400 text-zinc-600 focus:bg-white bg-zinc-100 w-80"
                />
              </div>
              <CustomButton
                className="text-white bg-indigo-500 rounded-sm hover:bg-white hover:text-indigo-500 hover:border-2 hover:border-indigo-400 h-9 w-65"
                label="Submit"
              />
              <div className="flex justify-end w-full">
                <LinkComponent
                  to="/list"
                  placeholder="Back"
                  className="text-indigo-500"
                />
              </div>
              <ImageField
                src={imageUrl}
                className="border-2 border-lime-600 w-50 h-50"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
