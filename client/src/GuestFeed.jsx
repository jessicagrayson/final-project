import React from 'react';
import Input from './Input';
import ImageField from './ImageField';
import LinkComponent from './LinkComponent';

const demoData = [
  {
    id: 1,
    location: 'Irvine, CA',
    travelDate: 'June 7, 2023',
    imageUrl: 'public/images/grandcanyon.JPG',
    // blurb: 'This is a test entry',
  },
  {
    id: 2,
    location: 'Big Sur, CA',
    travelDate: 'November 19, 2023',
    imageUrl: 'public/images/BigSur.JPG',
    // blurb: 'This is the second test entry',
  },
  {
    id: 3,
    location: 'Portland, OR',
    travelDate: 'April 14, 2023',
    imageUrl: 'public/images/Mt. Hood.jpeg',
    // blurb: 'This is the third test entry',
  },
  {
    id: 4,
    location: 'Irvine, CA',
    travelDate: 'June 7, 2023',
    imageUrl: 'public/images/grandcanyon.JPG',
    // blurb: 'This is a test entry',
  },
  {
    id: 5,
    location: 'Big Sur, CA',
    travelDate: 'November 19, 2023',
    imageUrl: 'public/images/BigSur.JPG',
    // blurb: 'This is the second test entry',
  },
  {
    id: 6,
    location: 'Portland, OR',
    travelDate: 'April 14, 2023',
    imageUrl: 'public/images/Mt. Hood.jpeg',
    // blurb: 'This is the third test entry',
  },
  {
    id: 7,
    location: 'Big Sur, CA',
    travelDate: 'November 19, 2023',
    imageUrl: 'public/images/BigSur.JPG',
    // blurb: 'This is the second test entry',
  },
  {
    id: 8,
    location: 'Portland, OR',
    travelDate: 'April 14, 2023',
    imageUrl: 'public/images/Mt. Hood.jpeg',
    // blurb: 'This is the third test entry',
  },
];

export default function GuestFeed() {
  return (
    <div className="flex flex-row flex-wrap items-center justify-center gap-y-2 gap-x-3">
      {demoData.map((entry) => (
        <div
          key={entry.id}
          className="flex p-3 mb-2 space-x-4 rounded-md bg-slate-200 hover:-translate-y-0.5 transition ease-in-out delay-70">
          <ImageField
            src={entry.imageUrl}
            className="w-40 h-40 my-1 rounded-md"
          />

          <div className="flex flex-col">
            <Input
              className="text-sm font-semibold bg-slate-200"
              placeholder="Location"
              value={entry.location}
            />
            <Input
              className="text-sm font-semibold bg-slate-200"
              placeholder="Location"
              value={entry.travelDate}
            />
          </div>
          <div className="flex items-end">
            <LinkComponent
              placeholder={'Details'}
              className="text-sm text-indigo-500 hover:underline hover:text-indigo-600"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
