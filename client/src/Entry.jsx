// Probably change the name of this at some point
// Also need to remove mt and ml, just for dev purposes
// Are labels in right place?
import React from 'react';
import Input from './Input';
import CustomButton from './CustomButton';

export default function Entry() {
  return (
    <div>
      <form className="flex flex-col ml-4">
        <label htmlFor="location" className="text-indigo-600">
          Location
        </label>
        <Input className="mt-5 ml-10 border-2 border-indigo-400 rounded-sm bg-zinc-200 w-80 h-9" />
        <label htmlFor="date" className="text-indigo-600">
          Date
        </label>
        <Input className="mt-5 ml-10 border-2 border-indigo-400 rounded-sm bg-zinc-200 w-80 h-9" />
        <label htmlFor="url" className="text-indigo-600">
          Image Url
        </label>
        <Input className="mt-5 ml-10 border-2 border-indigo-400 rounded-sm bg-zinc-200 w-80 h-9" />
        <label htmlFor="blurb" className="text-indigo-600">
          Blurb
        </label>
        <Input className="h-40 mt-5 ml-10 border-2 border-indigo-400 bg-zinc-200 w-80" />
        <CustomButton label="Submit" />
      </form>
    </div>
  );
}
