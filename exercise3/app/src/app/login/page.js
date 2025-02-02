'use client'

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';

import { LOGIN } from '@/app/constants/urls';
import { setToken } from '@/app/store/slices/userSlice';
import { HOME } from '@/app/constants/routes';
import { LOGIN as LOGIN_TEXT } from '@/app/constants/texts';

const LoginPage = () => {
  const dispatch = useDispatch();
  const { push } = useRouter();
  const token = useSelector((state) => state.user.token); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (token) {
        push(HOME);
    }
  }, [token]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);

    await fetch(LOGIN, {
      method: 'POST',
      body: formData,
    }).then(async (response) => {
        const resp = await response.json();

        if (response.ok) {
            dispatch(setToken(resp.token));
        }else{
            throw new Error(resp.description || "Login failed");
        }
    })
    .catch((err) => setError(err.message));
  };

  return (
    <div style={{ maxWidth: '300px' }}>
      <h2>{LOGIN_TEXT}</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type='email'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ display: 'block', width: '100%' }}
        />
        <input
          type='password'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ display: 'block', width: '100%' }}
        />
        <button type='submit' style={{ width: '100%', background: 'green', color: 'white' }}>
          {LOGIN_TEXT}
        </button>
      </form>
    </div>
  );
}

export default LoginPage;