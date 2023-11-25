import React from 'react';

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
    <div>
      <div className="flex flex-row flex-wrap items-center">
        {demoData.map((entry) => (
          <div key={entry.id} className="w-1/4 p-4">
            <h2 className="mb-2 text-lg font-bold">{entry.location}</h2>
            <p className="text-sm">{entry.blurb}</p>
            <p>{entry.travelDate}</p>
            <img src={entry.imageUrl} />
          </div>
        ))}
      </div>
    </div>
  );
}
