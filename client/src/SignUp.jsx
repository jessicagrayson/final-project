import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from './Input';
import CustomButton from './CustomButton';
import LinkComponent from './LinkComponent';

export default function SignUp() {
  const navigate = useNavigate();
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
      navigate('/list');
    } catch (error) {
      alert(`Error registering user: ${error}`);
    }
    // Logs new values
    console.log('username:', username);
    console.log('password', password);
    console.log('newUser', newUser);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center justify-center gap-y-12">
        <h3 className="text-lg font-medium">Create an Account</h3>
        <div className="flex items-end justify-center">
          <form onSubmit={handleSubmit} className="flex flex-col ">
            <div className="flex flex-col gap-y-12">
              <div className="flex flex-col">
                <label htmlFor="username" className="text-indigo-600">
                  Username:
                </label>
                <Input
                  id="username"
                  name="username"
                  type={'text'}
                  onChange={handleUsernameChange}
                  className="border-2 border-indigo-400 rounded-sm text-zinc-600 focus:bg-white bg-zinc-100 w-80 h-9"
                  autoComplete="off"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex justify-between">
                  <label htmlFor="password" className="text-indigo-600">
                    Password:
                  </label>
                </div>
                <Input
                  id="password"
                  name="password"
                  type={'password'}
                  onChange={handlePasswordChange}
                  className="border-2 border-indigo-400 rounded-sm bg-zinc-100 text-zinc-600 focus:bg-white w-80 h-9"
                />
              </div>
              <CustomButton
                className={
                  'h-9 text-white bg-indigo-500 rounded-sm w-65 hover:bg-white hover:text-indigo-500 hover:border-2 hover:border-indigo-400'
                }
                type="submit"
                label="Welcome!"
              />
            </div>
          </form>
        </div>
        <div className="flex justify-end w-full ">
          <LinkComponent
            to="/"
            className="text-sm text-indigo-600 hover:underline"
            placeholder="Sign In"
          />
        </div>
      </div>
    </div>
  );
}
