import GithubProvider from 'next-auth/providers/github';
import appConfig from '@/config/app-config';

export const authOptions = {
  secret: appConfig.JWT_SECRET,
  providers: [
    GithubProvider({
      clientId: appConfig.GITHUB_CLIENT_ID,
      clientSecret: appConfig.GITHUB_CLIENT_SECRET,
    }),
  ],
};
