import React from 'react';

const demoData = [
  {
    id: 1,
    location: 'Irvine, CA',
    // travelDate: '11/23/2023',
    // add imageUrl before blurb
    blurb: 'This is a test entry',
  },
  {
    id: 2,
    location: 'Chino, CA',
    // travelDate: '11/19/2023',
    // add imageUrl before blurb
    blurb: 'This is the second test entry',
  },
  {
    id: 3,
    location: 'Portland, OR',
    // travelDate: '4/14/2023',
    // add imageUrl before blurb
    blurb: 'This is the third test entry',
  },
];

export default function GuestFeed() {
  return (
    <div>
      <div className="flex flex-row flex-wrap items-center">
        {demoData.map((entry) => (
          <div key={entry.id} className="w-1/4 p-4">
            {/* Add your styling and content based on your needs */}
            <h2 className="mb-2 text-lg font-bold">{entry.location}</h2>
            {/* Add other fields like travelDate or imageUrl here */}
            <p className="text-sm">{entry.blurb}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
