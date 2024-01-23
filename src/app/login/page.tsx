import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

import SignInGithub from '@/components/SignInGithub';
import { authOptions } from '@/app/utils/auth';
import userService from '@/services/UserService';
import s from './login.module.scss';
import { User } from '@/repositories/user/types';

const Login = async () => {
  const session = await getServerSession(authOptions);

  if (session?.user?.email) {
    const user = await userService.getUser({ email: session.user.email });

    if (!user && session?.user) {
      await userService.createUser(session.user as User);
    }

    redirect('/');
  }

  return (
    <div className={s.root}>
      <div className={s.container}>
        <div className={s.title}>Log in</div>
        <SignInGithub />
      </div>
    </div>
  )
}

export default Login;
