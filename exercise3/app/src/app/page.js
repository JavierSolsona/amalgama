'use client'

import styles from './page.module.css';
import React from 'react';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';

import withAuth from '@/app/hoc/auth';
import { removeToken } from '@/app/store/slices/userSlice';
import { LOGIN } from '@/app/constants/routes';
import { WELCOME_MESSAGE, GO_LOGIN, LOGOUT } from '@/app/constants/texts';

const Home = () => {
  const { push } = useRouter();
  const dispatch = useDispatch();

  const goToLogin = () => {
    push(LOGIN);
  };

  const logout = () => {
    dispatch(removeToken());
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h2>{WELCOME_MESSAGE}</h2>
        <button
          onClick={goToLogin}
          style={{ width: '100%', background: 'green', color: 'white' }}
        >
          {GO_LOGIN}
        </button>
        <button
          onClick={logout}
          style={{ width: '100%', background: 'green', color: 'white' }}
        >
          {LOGOUT}
        </button>
      </main>
    </div>
  );
}

export default withAuth(Home);