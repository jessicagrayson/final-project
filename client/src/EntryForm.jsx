import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Input from './Input';
import CustomButton from './CustomButton';
import LinkComponent from './LinkComponent';
import { useState } from 'react';

export default function EntryForm() {
  const navigate = useNavigate();
  const loc = useLocation();
  const entry = loc.state;

  const isUpdating = !!entry;
  const entryId = entry ? entry.entryId : null;
  const header = isUpdating ? 'Update entry' : 'Create an entry';
  const entryTravelDate = entry?.travelDate;
  // Entry state variables
  const [location, setLocation] = useState(entry?.location ?? '');
  const [travelDate, setTravelDate] = useState(
    entry?.travelDate ? formatISODate(entryTravelDate) : ''
  );
  const [blurb, setBlurb] = useState(entry?.blurb ?? '');

  // Event handlers
  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleTravelDateChange = (e) => {
    setTravelDate(e.target.value);
  };

  const handleBlurbChange = (e) => {
    setBlurb(e.target.value);
  };

  // Entry submission code - authentication and authorization along with conditional PUT : POST
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const method = isUpdating ? 'PUT' : 'POST';
      const url = isUpdating ? `/api/update/${entryId}` : '/api/entryform';
      const formData = new FormData(event.target);
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
      const entry = await res.json();
      // Auto navigates to list upon successful creation
      navigate('/list');
      console.log('Uploaded:', entry);
    } catch (error) {
      alert(`Error creating entry:, ${error}`);
    }
  };

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

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center justify-center gap-y-12">
        <h3 className="text-lg font-medium">{header} </h3>
        <div className="flex items-end justify-center">
          <form onSubmit={handleSubmit} className="flex flex-col ml-4">
            <div className="flex flex-col gap-y-8">
              <div className="flex flex-col">
                <label htmlFor="location" className="text-indigo-600">
                  Location:
                </label>
                <Input
                  onChange={handleLocationChange}
                  value={location}
                  name="location"
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
                  name="travelDate"
                  className="border-2 border-indigo-400 rounded-sm text-zinc-600 focus:bg-white bg-zinc-100 w-80 h-9"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="imageUrl" className="text-indigo-600">
                  Image Url:
                </label>
                <Input
                  accept=".png, .jpg, .jpeg, .gif"
                  name="imageUrl"
                  type="file"
                  className="border-2 border-indigo-400 rounded-sm text-zinc-600 focus:bg-white bg-zinc-100 w-80 h-9"
                />
                {/* WIP - additional input */}
                <label htmlFor="imageUrl" className="text-indigo-600">
                  Image Url:
                </label>
                <Input
                  accept=".png, .jpg, .jpeg, .gif"
                  name="imageUrl"
                  type="file"
                  className="border-2 border-indigo-400 rounded-sm text-zinc-600 focus:bg-white bg-zinc-100 w-80 h-9"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="blurb" className="text-indigo-600">
                  Blurb:
                </label>
                <textarea
                  onChange={handleBlurbChange}
                  className={`overflow-scroll h-40 border-2 border-indigo-400 text-zinc-600 focus:bg-white bg-zinc-100 w-80`}
                  value={blurb}
                  name="blurb"></textarea>
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
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
