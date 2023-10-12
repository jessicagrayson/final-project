import React, { useState, useCallback } from 'react';
import ImageField from './ImageField';
import LinkComponent from './LinkComponent';
import Input from './Input';
import BlurbComponent from './BlurbComponent';

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
    <div className="flex bg-green-500">
      <form>
        <ImageField
          src={entry.imageUrl}
          placeholder="Image URL"
          value={entry.imageUrl}
          onChange={(e) => entry.onChange('Image Url', e.target.value)}
        />
        <div className="bg-red-300">
          <Input
            className="text-indigo-400"
            placeholder="Location"
            value={entry.location}
            onChange={(e) => entry.onChange('location', e.target.value)}
          />
          <Input
            className="text-indigo-400"
            placeholder="Travel Date"
            value={formatISODate(entry.travelDate)}
            onChange={(e) => entry.onChange('Travel Date', e.target.value)}
          />
        </div>
        <BlurbComponent
          className="text-black"
          placeholder="Blurb"
          value={entry.blurb}
          onChange={(e) => entry.onChange('Blurb', e.target.value)}
        />
        <LinkComponent
          to={`/entries/${entry.entryId}`}
          onClick={handleExpandClick}
          placeholder={expanded ? 'Collapse' : 'Expand'}
          className="text-indigo-500"
        />
      </form>
    </div>
  );
}
