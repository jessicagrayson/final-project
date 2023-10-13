import React, { useState, useCallback } from 'react';
import ImageField from './ImageField';
import LinkComponent from './LinkComponent';
import Input from './Input';
import BlurbComponent from './BlurbComponent';
// import { ImgWithCaption } from './ImgWithCaption';

export default function Entry({ entry }) {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = useCallback(() => {
    setExpanded(!expanded);
  }, [expanded]);

  function formatISODate(isoDate) {
    const date = new Date(isoDate);
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    return date.toLocaleDateString('en-US', options);
  }

  return (
    <div className="flex space-x-4">
      <ImageField src={entry.imageUrl} alt="Image" className="w-40 h-40 my-1" />
      <div className="flex flex-col">
        <div className="flex flex-col items-start">
          <Input
            className="text-sm font-semibold"
            placeholder="Location"
            value={entry.location}
            onChange={(e) => entry.onChange('location', e.target.value)}
          />
          <Input
            className="text-sm font-medium"
            placeholder="Travel Date"
            value={formatISODate(entry.travelDate)}
            onChange={(e) => entry.onChange('Travel Date', e.target.value)}
          />
        </div>
        {expanded && (
          <BlurbComponent
            className="text-black"
            placeholder="Blurb"
            value={entry.blurb}
            onChange={(e) => entry.onChange('Blurb', e.target.value)}
          />
        )}
      </div>
      <div className="flex items-end">
        <LinkComponent
          to={`/entries/${entry.entryId}`}
          onClick={handleExpandClick}
          placeholder={expanded ? 'Collapse' : 'Expand Entry'}
          className="text-xs text-indigo-400 hover:underline hover:text-indigo-600"
        />
      </div>
    </div>
  );
}
