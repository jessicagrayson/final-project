import React, { useState } from 'react';
import Input from './Input';
import CustomButton from './CustomButton';

export default function Form() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Creates new user object from values
    const newUser = {
      username: username,
      password: password,
    };

    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(newUser),
      });

      if (!res.ok) {
        throw new Error(`Fetch error ${res.status}`);
      }
      const user = await res.json();
      console.log('Registered:', user);
    } catch (error) {
      alert(`Error registering user: ${error}`);
    }
    // Logs new values
    console.log('username:', username);
    console.log('password', password);
    console.log('newUser', newUser);
  };

  return (
    <div>
      {/* Should this label be inside the form?  */}
      <label htmlFor="username" className="text-indigo-600">
        Username:
      </label>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <Input
          onChange={handleUsernameChange}
          type={'text'}
          placeholder={''}
          className="mt-5 ml-10 border-2 border-indigo-400 rounded-sm bg-zinc-200 w-80 h-9"
        />
        <label htmlFor="password" className="text-indigo-600">
          Password:
        </label>

        <Input
          onChange={handlePasswordChange}
          type={'password'}
          placeholder={''}
          className="mt-5 ml-10 border-2 border-indigo-400 rounded-sm bg-zinc-200 w-80 h-9"
        />

        <CustomButton label="Sign Up" />
      </form>
    </div>
  );
}
