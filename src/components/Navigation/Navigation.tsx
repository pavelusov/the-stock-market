'use client';

import { FC } from 'react';
import { signOut } from 'next-auth/react';
import { redirect } from 'next/navigation';
import Image from 'next/image';
import cn from 'classnames';

import { UserResponse } from '@/repositories/user/types';
import s from './navigation.module.css';

type Props = {
  user: UserResponse;
}

export const Navigation: FC<Props> = ({ user }) => {
  if (!user) {
    redirect('/login');
    return null;
  }

  const signOutHandle = async () => {
    await signOut();
    redirect('/login');
  }

  return (
    <div className={s.layout}>
      <div className={cn(s.userName, s.title)}>{user.name}</div>
      {user.image && (
        <div className={s.imageContainer}>
          <Image
            src={user.image}
            width={50}
            height={50}
            alt="Picture of the author"
          />
        </div>
      )}
      <div className={s.title} onClick={signOutHandle}>Sign out</div>
    </div>
  )
};
