import { getServerSession } from 'next-auth';

import Navigation from '@/components/Navigation';
import userService from '@/services/UserService';
import { authOptions } from '@/app/utils/auth';
import { UserResponse } from '@/repositories/user/types';
import s from './page.module.css';

export default async function Home() {
  let user: UserResponse = null;
  const session = await getServerSession(authOptions);

  if (session?.user?.email) user = await userService.getUser({ email: session.user.email });

  return (
      <div>
        <Navigation user={user} />
        <div className={s.content}>Home signed in</div>
      </div>
  )
}
