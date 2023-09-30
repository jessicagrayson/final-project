import React from 'react';
import Input from './Input';
import SignInBtn from './SignInBtn';

export default function Form() {
  return (
    <div>
      <form className="flex flex-col">
        <Input />
        <Input />
        <SignInBtn />
      </form>
    </div>
  );
}
