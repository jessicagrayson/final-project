import React, { useState, useCallback } from 'react';
import ImageField from './ImageField';
import LinkComponent from './LinkComponent';
import Input from './Input';
import BlurbComponent from './BlurbComponent';
import EntryView from './EntryView';

export default function Entry({ entry }) {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = useCallback(() => {
    setExpanded(!expanded);
  }, [expanded]);

  return (
    <div>
      <form className="flex flex-col">
        <Input
          className="text-indigo-400"
          placeholder="Location"
          value={entry.location}
          onChange={(e) => entry.onChange('location', e.target.value)}
        />
        <Input
          className="text-indigo-400"
          placeholder="Travel Date"
          value={entry.travelDate}
          onChange={(e) => entry.onChange('Travel Date', e.target.value)}
        />
        <ImageField
          src={entry.imageUrl}
          placeholder="Image URL"
          value={entry.imageUrl}
          onChange={(e) => entry.onChange('Image Url', e.target.value)}
        />
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
      {expanded && (
        <EntryView entryId={entry.entryId} onChange={entry.entryId} />
      )}
    </div>
  );
}
