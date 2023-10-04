import React from 'react';
import ImageField from './ImageField';
import LinkComponent from './LinkComponent';
import Input from './Input';
import { BlurbComponent } from './BlurbComponent';

export default function Entry() {
  return (
    <div className="flex flex-col">
      <Input value={'Orange County, CA'} className="text-indigo-400" />
      <Input value={'October 4, 2023'} className="text-indigo-400" />

      <ImageField src={'https://picsum.photos/200/300'} />
      <BlurbComponent
        className=""
        value={
          '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'
        }
      />
      <LinkComponent
        href={'#'}
        placeholder={'Back'}
        className="text-indigo-500"
      />
    </div>
  );
}
