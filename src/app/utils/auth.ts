import GithubProvider from "next-auth/providers/github"

export const authOptions = {
  secret: process.env.JWT_SECRET as string,
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    }),
  ],
};
