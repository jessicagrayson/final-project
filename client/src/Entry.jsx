import React from 'react';
import ImageField from './ImageField';
import LinkComponent from './LinkComponent';

export default function Entry() {
  return (
    <div>
      <h3>Orange County, CA</h3>
      <h3>October 4, 2023</h3>
      <ImageField src={'https://picsum.photos/200/300'} />
      <p>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum."
      </p>
      <LinkComponent
        href={'#'}
        placeholder={'Back'}
        className="text-indigo-500"
      />
    </div>
  );
}
