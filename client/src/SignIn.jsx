import React, { useState } from 'react';
import Input from './Input';
import CustomButton from './CustomButton';
import LinkComponent from './LinkComponent';

export default function SignIn() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  // console.log(formData);

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
    <div>
      <h3>Sign in to your next adventure!</h3>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <label htmlFor="username" className="text-indigo-600">
          Username:
        </label>
        <Input
          id="username"
          name="username"
          type={'text'}
          onChange={handleUsernameChange}
          className="mt-5 ml-10 border-2 border-indigo-400 rounded-sm bg-zinc-200 w-80 h-9"
        />
        <label htmlFor="password" className="text-indigo-600">
          Password:
        </label>

        <Input
          id="password"
          name="password"
          type={'password'}
          onChange={handlePasswordChange}
          className="mt-5 ml-10 border-2 border-indigo-400 rounded-sm bg-zinc-200 w-80 h-9"
        />
        <CustomButton type="submit" label="Sign In" />
      </form>
      <LinkComponent
        to="/list"
        className="text-indigo-600"
        placeholder="See all entries"
      />
      <LinkComponent
        to="/register"
        className="text-indigo-600"
        placeholder="New here?"
      />
    </div>
  );
}
