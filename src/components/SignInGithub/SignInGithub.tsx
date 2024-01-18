'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { Github, Shell } from 'lucide-react';
import s from './signin-github.module.scss';

export const SignInGithub = () => {
  const [isLoading, setIsLoading] = useState(false);

  const signInHandle = () => {
    setIsLoading(true);

    signIn(
      'github',
      { callbackUrl: `${window.location.origin}` }
    )
  }

  return (
    <button
      className={s.button}
      onClick={signInHandle}>
      {isLoading ?
      (
        <>
          <div className={s.buttonTitle}>Please wait...</div>
          <Shell className={s.spinner} />
        </>
      ) : (
        <>
          <div className={s.buttonTitle}>Log in with Github</div>
          <Github />
        </>
      )}
    </button>
  )
};
