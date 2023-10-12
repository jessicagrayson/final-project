import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from './Input';
import CustomButton from './CustomButton';
import LinkComponent from './LinkComponent';

export default function SignIn() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const formData = new FormData(event.currentTarget);
      const userData = Object.fromEntries(formData.entries());
      console.log('formData:', formData);
      console.log('userData:', userData);
      const req = {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(userData),
      };
      const res = await fetch('/api/sign-in', req);
      console.log('res:', res);
      if (!res.ok) {
        throw new Error(`fetch Error ${res.status}`);
      }
      // console.log('res text:', await res.text());
      const { user, token } = await res.json();
      sessionStorage.setItem('token', token);
      console.log('Signed In', user, ': received token:', token);
      console.log('username:', user);
      // Redirects upon successful sign in
      navigate('/list');
    } catch (error) {
      alert(`Sign in error ${error}`);
      console.error(error);
    }
  }

  const handleUsernameChange = (event) => {
    setFormData({ ...formData, username: event.target.value });
  };

  const handlePasswordChange = (event) => {
    setFormData({ ...formData, password: event.target.value });
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center justify-center gap-y-12">
        <h3 className="text-lg font-medium">Sign in to your next adventure</h3>
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
                  className="border-2 border-indigo-400 rounded-sm text-zinc-600 focus:bg-white bg-zinc-200 w-80 h-9"
                  autoComplete="off"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex justify-between">
                  <label htmlFor="password" className="text-indigo-600">
                    Password:
                  </label>
                  <LinkComponent
                    to="/forgotten-password"
                    placeholder={'Forgot password?'}
                    className="text-xs text-indigo-600 hover:underline"
                  />
                </div>
                <Input
                  id="password"
                  name="password"
                  type={'password'}
                  onChange={handlePasswordChange}
                  className="border-2 border-indigo-400 rounded-sm text-zinc-500 focus:bg-white bg-zinc-200 w-80 h-9"
                />
              </div>
              <CustomButton
                className={
                  'h-9 text-white bg-indigo-500 rounded-sm w-65 hover:bg-white hover:text-indigo-500 hover:border-2 hover:border-indigo-400'
                }
                type="submit"
                label="Sign In"
              />
            </div>
          </form>
        </div>
        <div className="flex justify-end w-full">
          <LinkComponent
            to="/register"
            className="text-sm text-indigo-600 hover:underline"
            placeholder="New here?"
          />
        </div>
      </div>
    </div>
  );
}
