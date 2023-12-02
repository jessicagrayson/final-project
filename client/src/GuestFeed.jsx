import React from 'react';
import Input from './Input';
import ImageField from './ImageField';

const demoData = [
  {
    id: 1,
    location: 'Irvine, CA',
    travelDate: 'June 7, 2023',
    imageUrl: 'public/images/grandcanyon.JPG',
    blurb: 'This is a test entry',
  },
  {
    id: 2,
    location: 'Big Sur, CA',
    travelDate: 'November 19, 2023',
    imageUrl: 'public/images/BigSur.JPG',
    blurb: 'This is the second test entry',
  },
  {
    id: 3,
    location: 'Portland, OR',
    travelDate: 'April 14, 2023',
    imageUrl: 'public/images/Mt. Hood.jpeg',
    blurb: 'This is the third test entry',
  },
];

export default function GuestFeed() {
  return (
    <div className="bg-green-400">
      <div className="flex flex-row flex-wrap items-center justify-center bg-pink-600 gap-y-2 gap-x-3">
        <div className="bg-blue-500">
          {demoData.map((entry) => (
            // BG color of each thing should be slate-200
            <div
              key={entry.id}
              className="flex p-3 mb-2 space-x-4 rounded md bg-green-200 hover:-translate-y-0.5 transition ease-in-out delay-70">
              <ImageField
                src={entry.imageUrl}
                className="w-40 my-1 rounded-md g-40"
              />

              <div className="flex flex-col bg-orange-400">
                <Input
                  className="text-sm font-semibold bg-yellow-200"
                  placeholder="Location"
                  value={entry.location}
                />
                <Input
                  className="text-sm font-semibold bg-purple-200"
                  placeholder="Location"
                  value={entry.travelDate}
                />
              </div>
              {/* <Input
                className="text-sm font-semibold bg-red-200"
                placeholder="Location"
                value={entry.blurb}
              /> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
