import React, { useState } from 'react';
import Input from './Input';
import SignInBtn from './SignInBtn';

export default function Form() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Logs updated state values for username and password
    console.log('username:', username);
    console.log('password:', password);
  };

  return (
    <div>
      <label htmlFor="username" className="text-indigo-600">
        Username:
      </label>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <Input
          onChange={handleUsernameChange}
          type={'text'}
          placeholder={''}
          className="bg-zinc-200 border-2 border-indigo-400 w-80 h-9 rounded-sm mt-5 ml-10"
        />
        <label htmlFor="password" className="text-indigo-600">
          Password:
        </label>

        <Input
          onChange={handlePasswordChange}
          type={'password'}
          placeholder={''}
          className="bg-zinc-200 border-2 border-indigo-400 w-80 h-9 rounded-sm mt-5 ml-10"
        />
        <SignInBtn />
      </form>
    </div>
  );
}
