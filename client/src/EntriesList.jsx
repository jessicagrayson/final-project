import React from 'react';
import Entry from './Entry';
import LinkComponent from './LinkComponent';

export default function EntriesList() {
  return (
    <div>
      <LinkComponent
        href={'#'}
        placeholder={'Create New (link)'}
        className="text-indigo-500"
      />
      <Entry />
      <Entry />
      <Entry />
      <LinkComponent
        href={'#'}
        placeholder={'Back (link)'}
        className="text-indigo-500"
      />
    </div>
  );
}
